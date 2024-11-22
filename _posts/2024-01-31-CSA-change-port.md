---
title: The Three Locations for Changing Your Spring Port
description: Please read this before asking me
toc: true
layout: post
---

# Please READ this


There are three places to change your port for a spring boot project.

The first one is the dockerfile (root directory):
```
# syntax=docker/dockerfile:1
FROM openjdk:17-oracle
WORKDIR /app
#RUN apk update && apk upgrade && \
#    apk add --no-cache git 
COPY . /app
RUN ./mvnw package
CMD ["java", "-jar", "target/spring-0.0.1-SNAPSHOT.jar"]
EXPOSE 8032 <-- right here

```

The second one is the docker-compose file (root directory):
```
version: '3'
services:
  web:
    image: java_springv1
    build: .
    ports:
      - "8032:8032" <-- right here
    volumes:
       - ./volumes:/volumes
    restart: unless-stopped
```

The third and one is in application properties (application.properties) (src/main/resources/):
```
server.error.whitelabel.enabled=false
spring.devtools.add-properties=false
logging.level.root=warn

spring.jpa.database-platform=org.hibernate.community.dialect.SQLiteDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=false
spring.jpa.open-in-view=false
spring.datasource.url = jdbc:sqlite:volumes/sqlite.db
spring.datasource.driver-class-name = org.sqlite.JDBC
spring.datasource.username = admin
spring.datasource.password = admin

server.port=8032 <-- right here


```

