"use client";
import React, { useEffect } from "react";

function Counter() {
  useEffect(() => {
    const counters = document.querySelectorAll(".number h2"); // Select all h2 elements in .number

    counters.forEach((counter) => {
      const start = parseInt(counter.textContent || "0", 10); // Initial number
      const target = start + Math.floor(Math.random() * 50) + 20; // Random target
      const duration = 2000; // Animation duration in milliseconds
      const stepTime = 16; // Time between updates (16ms for smooth animation)
      const increment = (target - start) / (duration / stepTime);

      let current = start;

      function updateCounter() {
        current += increment;
        if (current >= target) {
          current = target; // Ensure it stops at the target
          counter.textContent = Math.floor(current).toString(); // Set the final value
        } else {
          counter.textContent = Math.floor(current).toString(); // Update current value
          setTimeout(updateCounter, stepTime); // Schedule next update
        }
      }

      updateCounter();
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      <section className="count">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="countSec d-flex">
                <div className="countContent text-center">
                  <div className="number">
                    <h2>5</h2>
                  </div>
                  <div className="text">
                    <p>Spaces</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>11</h2>
                  </div>
                  <div className="text">
                    <p>Folders</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>39</h2>
                  </div>
                  <div className="text">
                    <p>Lists</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>116</h2>
                  </div>
                  <div className="text">
                    <p>Views</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>210</h2>
                  </div>
                  <div className="text">
                    <p>Custom Fields</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>244</h2>
                  </div>
                  <div className="text">
                    <p>Automations</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>6</h2>
                  </div>
                  <div className="text">
                    <p>Dashboards</p>
                  </div>
                </div>
                <div className="countContent text-center">
                  <div className="number">
                    <h2>0</h2>
                  </div>
                  <div className="text">
                    <p>Intergrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
