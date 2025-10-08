#!/bin/bash

# DNS Propagation Monitor for antonylester.com → Firebase
# This script checks DNS propagation every minute and alerts when ready for Firebase verification

DOMAIN="antonylester.com"
WWW_DOMAIN="www.antonylester.com"
EXPECTED_IP="199.36.158.100"
EXPECTED_TXT="hosting-site=portfolio-antony-lester"
EXPECTED_CNAME="portfolio-antony-lester.web.app"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# DNS servers to check
DNS_SERVERS=("8.8.8.8" "1.1.1.1" "208.67.222.222" "9.9.9.9")

echo -e "${BLUE}🌐 DNS Propagation Monitor for ${DOMAIN} & ${WWW_DOMAIN}${NC}"
echo -e "${BLUE}Target IP: ${EXPECTED_IP}${NC}"
echo -e "${BLUE}Target TXT: ${EXPECTED_TXT}${NC}"
echo -e "${BLUE}Target CNAME (www): ${EXPECTED_CNAME}${NC}"
echo -e "${BLUE}Checking every 60 seconds...${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop${NC}"
echo ""

check_propagation() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${BLUE}[${timestamp}] Checking DNS propagation...${NC}"
    
    local a_record_success=0
    local txt_record_success=0
    local total_servers=${#DNS_SERVERS[@]}
    
    # Check A record on all DNS servers
    echo -e "${YELLOW}📍 A Record Check:${NC}"
    for dns in "${DNS_SERVERS[@]}"; do
        local result=$(dig @${dns} ${DOMAIN} A +short +timeout=5 2>/dev/null | head -1)
        if [[ "$result" == "$EXPECTED_IP" ]]; then
            echo -e "  ✅ ${dns}: ${GREEN}${result}${NC}"
            ((a_record_success++))
        else
            echo -e "  ❌ ${dns}: ${RED}${result:-timeout/error}${NC}"
        fi
    done
    
    # Check TXT record on all DNS servers
    echo -e "${YELLOW}📝 TXT Record Check:${NC}"
    for dns in "${DNS_SERVERS[@]}"; do
        local result=$(dig @${dns} ${DOMAIN} TXT +short +timeout=5 2>/dev/null | grep -F "$EXPECTED_TXT")
        if [[ -n "$result" ]]; then
            echo -e "  ✅ ${dns}: ${GREEN}Found Firebase TXT record${NC}"
            ((txt_record_success++))
        else
            echo -e "  ❌ ${dns}: ${RED}Firebase TXT record not found${NC}"
        fi
    done
    
    # Check HTTP response
    echo -e "${YELLOW}🌐 HTTP Check:${NC}"
    local http_response=$(curl -s -I -m 10 http://${DOMAIN} 2>/dev/null | head -1)
    if echo "$http_response" | grep -q "HTTP"; then
        echo -e "  📡 Response: ${YELLOW}${http_response}${NC}"
    else
        echo -e "  📡 Response: ${RED}No response or timeout${NC}"
    fi
    
    # Calculate propagation percentage
    local a_percentage=$((a_record_success * 100 / total_servers))
    local txt_percentage=$((txt_record_success * 100 / total_servers))
    
    echo -e "${BLUE}📊 Propagation Status:${NC}"
    echo -e "  🎯 A Record: ${a_record_success}/${total_servers} servers (${a_percentage}%)"
    echo -e "  🎯 TXT Record: ${txt_record_success}/${total_servers} servers (${txt_percentage}%)"
    
    # Check if ready for Firebase verification
    if [[ $a_record_success -ge 3 && $txt_record_success -ge 3 ]]; then
        echo ""
        echo -e "${GREEN}🎉 DNS PROPAGATION READY! 🎉${NC}"
        echo -e "${GREEN}✅ A record propagated to ${a_record_success}/${total_servers} DNS servers${NC}"
        echo -e "${GREEN}✅ TXT record propagated to ${txt_record_success}/${total_servers} DNS servers${NC}"
        echo ""
        echo -e "${YELLOW}🔥 ACTION REQUIRED:${NC}"
        echo -e "${YELLOW}1. Go to Firebase Console: https://console.firebase.google.com/project/portfolio-antony-lester/hosting/main${NC}"
        echo -e "${YELLOW}2. Click 'Verify' for antonylester.com${NC}"
        echo -e "${YELLOW}3. Firebase should now successfully verify your domain!${NC}"
        echo ""
        
        # Sound alert (if available)
        (speaker-test -t sine -f 1000 -l 1 & sleep 0.3 && kill -9 $!) 2>/dev/null || true
        
        # Ask user if they want to continue monitoring
        echo -e "${BLUE}Continue monitoring? (y/n):${NC}"
        read -t 30 -n 1 continue_monitoring
        echo ""
        if [[ "$continue_monitoring" != "y" && "$continue_monitoring" != "Y" ]]; then
            echo -e "${GREEN}Monitoring stopped. Good luck with Firebase verification! 🚀${NC}"
            exit 0
        fi
    elif [[ $a_record_success -ge 2 || $txt_record_success -ge 2 ]]; then
        echo -e "${YELLOW}⏳ Getting close! Propagation in progress...${NC}"
    else
        echo -e "${RED}❌ Still propagating. Please wait...${NC}"
    fi
    
    echo ""
    echo -e "${BLUE}───────────────────────────────────────${NC}"
    echo ""
}

# Main monitoring loop
while true; do
    check_propagation
    sleep 60
done
