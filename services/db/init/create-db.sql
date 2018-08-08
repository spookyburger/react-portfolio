drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists helio;
drop database if exists helio_integration;
drop role if exists helio_app;
drop role if exists helio_read;

create role helio_app login password 'heliodev' valid until 'infinity';
create role helio_read login password 'heliodev' valid until 'infinity';
create database helio;
create database helio_integration;
