[General]
bypass-system = true
tun-excluded-routes = 10.0.0.0/8, 17.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
dns-server = 8.8.8.8, 1.1.1.1

[Rule]
# 拦截广告服务器
DOMAIN-SUFFIX,ads.jumpapp.com,REJECT
DOMAIN-SUFFIX,adserver.jumpapp.com,REJECT
DOMAIN-SUFFIX,track.jumpapp.com,REJECT

[URL Rewrite]
# 拦截开屏广告请求
^https?:\/\/ads\.jumpapp\.com\/splash_screen.*$ reject
# 拦截应用内广告请求
^https?:\/\/ads\.jumpapp\.com\/in_app_ads.*$ reject
# 拦截跟踪请求
^https?:\/\/track\.jumpapp\.com\/.*$ reject

[MITM]
hostname = ads.jumpapp.com, track.jumpapp.com

[Script]
# 拦截开屏广告的请求
http-request ^https?:\/\/ads\.jumpapp\.com\/splash_screen.*$ script-path=jump_splash_ads_blocker.js
# 拦截应用内广告的请求
http-request ^https?:\/\/ads\.jumpapp\.com\/in_app_ads.*$ script-path=jump_in_app_ads_blocker.js
# 拦截跟踪请求
http-response ^https?:\/\/track\.jumpapp\.com\/.*$ script-path=jump_tracking_blocker.js
