"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Numbers } from "@/constant/data";
import { useState } from "react";

const Wrapper = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSetValue = (input) => {
    if (input === "AC") {
      // if the input value is AC the it will clear the value.
      setValue("");
      setResult("");
    } else if (input === "=") {
      // it will calculate the result when the input value is =
      handleCalculate();
    } else {
      // Append input to current value
      setValue((prev) => prev + input);
    }
  };

  const handleCalculate = () => {
    //This function is used to canculate the values from the given input and returns the values.
    try {
      const output = eval(value);
      setResult(output.toString());
      setValue(output.toString());
    } catch (error) {
      setResult("Error");
      setValue("");
    }
  };

  return (
    //This is used to wrap the entire claculator app.
    <Card className="w-[350px] h-[450px] p-4">

      {/* Display the input and result */}
      <CardHeader className="pr-3">
        <CardTitle className="text-right overflow-hidden text-3xl">
          {value || "0"}
        </CardTitle>
        <CardDescription className="text-right text-xl">
          {result || ""}
        </CardDescription>
        <div className="flex justify-end items-start mt-2">
          <Button onClick={() => handleSetValue("AC")} className="w-1/2">
            AC
          </Button>
        </div>
      </CardHeader>
        {/* this contains all the buttons which includes all the numbers and operators */}
      <CardContent className="grid grid-cols-4 gap-2">
        
        {Numbers.map((number, index) => (
          <Button
            onClick={() => handleSetValue(number.value)}
            size="lg"
            key={index}
          >
            {number.value}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default Wrapper;
