FROM python:3.10.0-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir /django
WORKDIR /django
COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .