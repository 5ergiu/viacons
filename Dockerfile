FROM php:8.1.1-fpm-bullseye

# Arguments defined in docker-compose.yml
ARG UID

# Install system dependencies
RUN curl -fsSL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get update && \
    apt-get install -y --no-install-recommends libpng-dev libjpeg62-turbo-dev libfreetype6-dev zip unzip git nano nodejs && \
    npm install -g yarn

# Install extensions
RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg && \
    docker-php-ext-install pdo_mysql opcache fileinfo gd

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/

# Update php-fpm config
RUN sed -i 's/pm.max_children = .*$/pm.max_children = 100/' /usr/local/etc/php-fpm.d/www.conf

# Create system user to run Composer and Symfony Commands
RUN useradd -G www-data,root -u $UID -ms /bin/bash www

# Set working directory
WORKDIR /var/api

USER www
