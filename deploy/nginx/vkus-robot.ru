# Vkus Robot — vkus-robot.ru
# Frontend (Docker) на порту 8096
# После размещения: sudo ln -sf /etc/nginx/sites-available/vkus-robot.ru /etc/nginx/sites-enabled/
# SSL: sudo certbot --nginx -d vkus-robot.ru -d www.vkus-robot.ru

upstream vkus_robot_frontend {
    server 127.0.0.1:8096;
    keepalive 64;
}

server {
    server_name vkus-robot.ru www.vkus-robot.ru;

    if ($host = www.vkus-robot.ru) {
        return 301 https://vkus-robot.ru$request_uri;
    }

    location / {
        proxy_pass http://vkus_robot_frontend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    listen 80;
}

# Блоки 443 и редиректы с 80 -> 443 добавляет certbot после:
#   sudo certbot --nginx -d vkus-robot.ru -d www.vkus-robot.ru
