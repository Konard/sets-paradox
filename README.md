# Sets Paradox

A playful exploration of Russell’s Paradox in JavaScript. This repository experiments with the classic logical conundrum: **"Does a set that contains all sets that do not contain themselves, contain itself?"** Both possibilities lead to a contradiction, and these examples illustrate the inherent instability of self-reference in set theory.

## Overview

This project contains two experimental scripts that tackle the paradox from different angles:

- **`resolutions/error.js`**  
  Attempts to construct a set that should contain all sets that do not contain themselves. It demonstrates the immediate logical contradiction by throwing an error when the set ends up containing itself.

- **`resolutions/time.js`**  
  Simulates the paradox over time by repeatedly toggling the set's self-membership. This dynamic approach illustrates the unstable nature of the self-referential condition by alternating between the set containing itself and not containing itself.

## File Structure

```
.
├── LICENSE
├── README.md
└── resolutions
    ├── error.js
    └── time.js
```

- **LICENSE**: The project’s license (Unlicense).
- **README.md**: This file.
- **resolutions/error.js**: Contains code that immediately highlights the paradox by enforcing the set condition and throwing an error upon contradiction.
- **resolutions/time.js**: Implements a time-based simulation that toggles the set's self-membership every second.

## Getting Started

### Prerequisites

To run these scripts, you need [Node.js](https://nodejs.org/). Ensure you have Node.js installed by running:

```bash
node --version
```

### Running the Scripts

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/sets-paradox.git
   cd sets-paradox
   ```

2. **Run \`error.js\`:**

   This script will attempt to build the self-referential set and throw an error when the contradiction is detected.

   ```sh
   node resolutions/error.js
   ```

3. **Run \`time.js\`:**

   This script starts a simulation that toggles the self-membership of the set every second. It logs each state change to the console.

   ```sh
   node resolutions/time.js
   ```

   Watch the console output to observe how the set alternates between containing itself and not containing itself.

## Discussion

The paradox of a set containing all sets that do not contain themselves is a classical problem that exposes the limits of naive set theory. While these scripts do not provide a resolution in the mathematical sense, they offer a visual and interactive way to engage with the paradox. The \`error.js\` script demonstrates the immediate contradiction, while \`time.js\` provides an ongoing simulation that reflects the instability of self-referential definitions.

## Contributing

Contributions, improvements, and discussions are welcome! If you have ideas to expand on this exploration or want to refine the simulation, please open an issue or submit a pull request.

## License

This project is licensed under the terms specified in the [Unlicense](http://unlicense.org) file.

---

*Note: This repository is intended for educational and exploratory purposes, shedding light on the subtleties of self-reference in set theory.*
