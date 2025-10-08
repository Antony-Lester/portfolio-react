#!/bin/bash

# Comprehensive test for antonylester.com and www.antonylester.com
# Testing both HTTP and HTTPS connectivity

ROOT_DOMAIN="antonylester.com"
WWW_DOMAIN="www.antonylester.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🌐 Comprehensive Domain Test for Portfolio${NC}"
echo -e "${BLUE}Testing: ${ROOT_DOMAIN} and ${WWW_DOMAIN}${NC}"
echo ""

test_domain() {
    local domain=$1
    local test_name=$2
    
    echo -e "${YELLOW}🔍 Testing ${test_name}: ${domain}${NC}"
    
    # DNS Resolution Test
    echo -e "${BLUE}📍 DNS Resolution:${NC}"
    local ip=$(dig +short ${domain} | tail -1)
    if [[ -n "$ip" ]]; then
        echo -e "  ✅ Resolves to: ${GREEN}${ip}${NC}"
    else
        echo -e "  ❌ ${RED}DNS resolution failed${NC}"
    fi
    
    # HTTP Test
    echo -e "${BLUE}🌐 HTTP Test:${NC}"
    local http_response=$(curl -s -I -m 10 --connect-timeout 5 http://${domain} 2>/dev/null)
    if [[ -n "$http_response" ]]; then
        local status_line=$(echo "$http_response" | head -1)
        local server=$(echo "$http_response" | grep -i "server:" | cut -d' ' -f2-)
        echo -e "  📡 Status: ${GREEN}${status_line}${NC}"
        echo -e "  🖥️  Server: ${GREEN}${server}${NC}"
        
        # Check if it's redirecting to HTTPS
        if echo "$http_response" | grep -q "301\|302"; then
            local location=$(echo "$http_response" | grep -i "location:" | cut -d' ' -f2-)
            echo -e "  🔄 Redirects to: ${YELLOW}${location}${NC}"
        fi
    else
        echo -e "  ❌ ${RED}HTTP connection failed${NC}"
    fi
    
    # HTTPS Test
    echo -e "${BLUE}🔒 HTTPS Test:${NC}"
    local https_response=$(curl -s -I -m 10 --connect-timeout 5 https://${domain} 2>/dev/null)
    if [[ -n "$https_response" ]]; then
        local status_line=$(echo "$https_response" | head -1)
        local server=$(echo "$https_response" | grep -i "server:" | cut -d' ' -f2-)
        echo -e "  📡 Status: ${GREEN}${status_line}${NC}"
        echo -e "  🖥️  Server: ${GREEN}${server}${NC}"
        
        # Test if it loads your React app
        local content=$(curl -s -m 10 https://${domain} 2>/dev/null | head -c 200)
        if echo "$content" | grep -q "Antony Lester\|react"; then
            echo -e "  ✅ ${GREEN}Your portfolio is loading!${NC}"
        else
            echo -e "  ⚠️  ${YELLOW}Connected but content unclear${NC}"
        fi
    else
        echo -e "  ❌ ${RED}HTTPS connection failed${NC}"
    fi
    
    # SSL Certificate Test
    echo -e "${BLUE}🔐 SSL Certificate Test:${NC}"
    local ssl_info=$(echo | openssl s_client -servername ${domain} -connect ${domain}:443 2>/dev/null | openssl x509 -noout -subject -dates 2>/dev/null)
    if [[ -n "$ssl_info" ]]; then
        echo -e "  ✅ ${GREEN}SSL Certificate is valid${NC}"
        echo "$ssl_info" | while read line; do
            echo -e "  📜 ${line}"
        done
    else
        echo -e "  ❌ ${RED}SSL Certificate check failed${NC}"
    fi
    
    echo ""
    echo -e "${BLUE}───────────────────────────────────────${NC}"
    echo ""
}

# Test both domains
test_domain "$ROOT_DOMAIN" "Root Domain"
test_domain "$WWW_DOMAIN" "WWW Subdomain"

# Final Summary
echo -e "${BLUE}🎯 Quick Access Test:${NC}"
echo -e "${YELLOW}Try these URLs in your browser:${NC}"
echo -e "  🌐 https://${ROOT_DOMAIN}"
echo -e "  🌐 https://${WWW_DOMAIN}"
echo -e "  🌐 http://${ROOT_DOMAIN} (should redirect to HTTPS)"
echo -e "  🌐 http://${WWW_DOMAIN} (should redirect to HTTPS)"
echo ""
echo -e "${GREEN}🚀 Portfolio Testing Complete!${NC}"
