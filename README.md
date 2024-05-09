### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

#### Challenge Overview

This challenge invites students to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

##### Problem Areas to Address

1. **Unit Mismatch**: The provided functions fail to convert units correctly, leading to calculation inaccuracies.
2. **Parameter Misalignment**: Parameters are not handled in a way that prevents or highlights the potential for unit mismatch errors, leading to possible confusion.


#### Goals
1. Enhance code readability for easier debugging.
2. Identify and correct calculation errors.
3. Improve the robustness of calculations. If incorrect units are used or other errors are detected, the code should notify the user instead of producing an incorrect result.

#### Solution Approach

- Used object destructuring in function parameters for better clarity.
- Implemented accurate unit conversions within the functions.
- Ensured that the corrected functions address the issues of unit mismatches and parameter clarity.

### Learning Experience
I had to convert incorrect units into proper ones for accurate results and checked if user inputs the correct units while calculating.