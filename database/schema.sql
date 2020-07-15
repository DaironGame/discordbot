CREATE DATABASE Discordb;
CREATE TABLE Guilds (
    guildId VARCHAR(100) NOT NULL PRIMARY KEY,
    guildOwnerId VARCHAR(100) NOT NULL,
    createdAt DATE NOT NULL,
    guildName VRCHAR(100) NOT NULL
);

CREATE TABLE TokenSystem (
    userId VARCHAR(100) NOT NULL,
    userTokens VARCHAR(100) DEFAULT '0'
);