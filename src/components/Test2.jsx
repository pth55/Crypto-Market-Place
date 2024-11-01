import React from 'react'
import Test from "./Test"

export default function Test2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
        <Test courseName={"Learn OOPS in Python"} companyName={"P3Schools"} level={1} />
        <Test courseName={"Programming in Java"} companyName={"P3Schools"} level={3} />
        <Test courseName={"Blochchain using Solidity"} companyName={"P3Schools"} level={2} />
        <Test courseName={"Learn OOPS in Python"} companyName={"P3Schools"} level={2} />
        <Test courseName={"Programming in Java"} companyName={"P3Schools"} level={1} />
        <Test courseName={"Blochchain using Solidity"} companyName={"P3Schools"} level={3} />
        <Test courseName={"Learn OOPS in Python"} companyName={"P3Schools"} level={2} />
        <Test courseName={"Programming in Java"} companyName={"P3Schools"} level={1} />
        <Test courseName={"Blochchain using Solidity"} companyName={"P3Schools"} level={3} />
    </div>
  )
}
