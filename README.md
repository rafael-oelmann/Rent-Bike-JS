# Rent-Bike-JS 🚲

## Intro

A simple node.js app that emulates a rent-bike docking station system, commonly used in cities.

This was written with TDD (Test Driven Development) approach using Jest as my testing framework.

## Installation

1. Clone or fork this repo.
2. If you do not already have [Node](https://nodejs.org/en/ "Nodes's Homepage") then insall it from thier homepage.
3. From the project rood directory, run: ~ npm install
4. Fromt the root directory, you should now be able to run test using Jest with: ~ npm test

## Class Diagram (Docking Station & Bike)

![image of a class diagram.](/images/classDiagram.png "image of a class diagram.")

## User Stories

```
As a person,
So that I can use a bike,
I'd like a docking station to release a bike.

As a person,
So that I can use a good bike,
I'd like to see if a bike is working

As a member of the public
So I can return bikes I've hired
I want to dock my bike at the docking station

As a member of the public
So I can decide whether to use the docking station
I want to see a bike that has been docked

As a maintainer of the system,
So that I can control the distribution of bikes,
I'd like docking stations not to accept more bikes than their capacity.

As a system maintainer,
So that I can plan the distribution of bikes,
I want a docking station to have a default capacity of 5 bikes.

As a system maintainer,
So that busy areas can be served more effectively,
I want to be able to specify a larger capacity when necessary.

As a member of the public,
So that I reduce the chance of getting a broken bike in future,
I'd like to report a bike as broken when I return it.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations not to release broken bikes.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations to accept returning bikes (broken or not).
```
