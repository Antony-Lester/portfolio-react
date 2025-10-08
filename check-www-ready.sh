#!/bin/bash

# Monitor www.antonylester.com for Firebase readiness
WWW_DOMAIN="www.antonylester.com"
EXPECTED_CNAME="portfolio-antony-lester.web.app"

echo "🌐 Checking www subdomain readiness for Firebase..."
echo "Target: ${WWW_DOMAIN} → ${EXPECTED_CNAME}"
echo ""

check_www_status() {
    echo "📍 DNS Check:"
    local cname_result=$(dig @8.8.8.8 ${WWW_DOMAIN} CNAME +short)
    local ip_result=$(dig @8.8.8.8 ${WWW_DOMAIN} +short | tail -1)
    
    if [[ "$cname_result" == "${EXPECTED_CNAME}." ]]; then
        echo "  ✅ CNAME: ${cname_result}"
    else
        echo "  ❌ CNAME: ${cname_result:-not found}"
    fi
    
    echo "  📡 Resolves to IP: ${ip_result:-not found}"
    
    echo ""
    echo "🌐 HTTP Test:"
    local http_response=$(curl -s -I -m 10 http://${WWW_DOMAIN} 2>/dev/null | head -1)
    if echo "$http_response" | grep -q "HTTP"; then
        echo "  📡 HTTP Response: ${http_response}"
    else
        echo "  📡 HTTP: No response or timeout"
    fi
    
    echo ""
    echo "🔒 HTTPS Test:"
    local https_response=$(curl -s -I -m 10 https://${WWW_DOMAIN} 2>/dev/null | head -1)
    if echo "$https_response" | grep -q "HTTP"; then
        echo "  📡 HTTPS Response: ${https_response}"
        echo "  ✅ HTTPS working - Firebase might be serving the domain!"
    else
        echo "  📡 HTTPS: No response or timeout"
    fi
    
    echo ""
    if [[ "$cname_result" == "${EXPECTED_CNAME}." ]]; then
        echo "🎉 www subdomain DNS is ready!"
        echo "🔥 Go to Firebase Console and add: ${WWW_DOMAIN}"
        echo "🌐 https://console.firebase.google.com/project/portfolio-antony-lester/hosting/main"
        return 0
    else
        echo "⏳ Waiting for DNS propagation..."
        return 1
    fi
}

check_www_status
