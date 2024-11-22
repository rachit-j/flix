---
title: The Three Locations for Changing Your Flask Port
description: Please read this before asking me
toc: true
layout: post
---

# Please READ this


There are three places to change your port for a spring boot project.

The first one is the dockerfile (root directory):
```dockerfile
FROM docker.io/python:3.10

WORKDIR /

# --- [Install python and pip] ---
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y python3 python3-pip git
COPY . /

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

ENV GUNICORN_CMD_ARGS="--workers=1 --bind=0.0.0.0:----" # <-- Right here (should be 0.0.0.0:[your port])

EXPOSE ---- # <-- Right here (should be [your port])

CMD [ "gunicorn", "main:app" ]


```

The second one is the docker-compose file (root directory):
```
version: '3'
services:
        web:
                image: flask_port_v1
                build: .
                ports:
                        - "----:----"  # <-- Right here, replace both with your desired port number ([your port]:[your port]), ie. 8086:8086
                volumes:
                        - ./volumes:/volumes
                        - ./instance:/instance
                restart: unless-stopped
```

The third and one is in main.py (root directory):
```python
...
if __name__ == "__main__":
    # change name for testing
    from flask_cors import CORS
    cors = CORS(app)
    app.run(debug=True, host="0.0.0.0", port="----") <--  Right here (should be "[your port]")

```

