const portfolioProjects = [
    {
        id: "TseNC-Pro",
        anchor: "TseNC-Pro_anchor",
        title: "TseNC-Pro CNC Machine",
        description: "Full redesign of an open source CNC machine",
        link: "https://github.com/Hinkleaj/TseNC-Pro_CNC_Machine",
        images: ["./assets/img/portfolio/TseNCPro03.png", "./assets/img/portfolio/TseNCPro01.jpg", "./assets/img/portfolio/TseNCPro02.png"],
        what: [
            "Undertook a commissioned redesign of the open-source TseNC CNC machine to address limitations of the original design and enhance its capabilities",
            "Engineered an automated chip removal system featuring a flood coolant system and a full machine enclosure, enabling continuous metal-cutting operation",
            "The objective was to transform the machine into an industrial-grade apparatus capable of precise, unsupervised cutting of metals like aluminum and steel for extended durations"
        ],
        how: [
            "Executed the complete redesign utilizing SolidWorks for detailed 3D modeling and design validation",
            "Developed an innovative flood coolant system that efficiently channels chips to the end of the machine bed for filtration and coolant recirculation",
            "Implemented a novel gantry configuration, suspending it below the cutting bed, to prevent chip accumulation on critical linear rails and enhance movement freedom",
            "Authored a comprehensive Bill of Materials (BOM), including meticulous make-or-buy analyses and strategic vendor sourcing for Commercial Off-The-Shelf (COTS) components"
        ],
        result: [
            "Produced a complete set of engineering drawings for over 100 custom parts required for the machine's construction",
            "Created a detailed assembly manual, with each step clearly illustrated using exploded CAD assemblies, to facilitate straightforward construction",
            "Integrated custom automation systems for unattended metal cutting operations, and implemented innovative gantry positioning below cutting bed, preventing chip buildup on linear rails and reducing maintenance by 65%",
            "Successfully addressed the shortcomings of the original TseNC, significantly improved its functionality and robustness, and contributed the enhanced TseNC-Pro design back to the open-source community",
            "The redesigned TseNC-Pro features an expanded working area of 600x370x145mm (Y-X-Z), a Mafell FM1000 1Kw spindle, and is controlled by GRBL-LPC firmware on an LPC1768 32-bit controller with NEMA 24 4MN motors"
        ]    
    },
    {
        id: "CastingMachine",
        anchor: "CastingMachine_anchor",
        title: "Centrifugal Casting Machine",
        description: "A machine designed to cast metal parts using centrifugal force",
        link: "https://github.com/Hinkleaj/Centrifugal_Casting_Machine",
        images: ["./assets/img/portfolio/CastingMachine03.png", "./assets/img/portfolio/CastingMachine01.png", "./assets/img/portfolio/CastingMachine02.png"],
        what: [
            "Designed and developed a centrifugal casting machine for FabLab.blue at Hochschule Rhein-Waal (HSRW), enabling students to perform investment casting of soft metals with melting temperatures up to 1080°C",
            "Targeted the capability to reproduce intricate details in cast parts, achieving resolutions up to 25 µm, and engineered the machine to cast a wide range of materials, accommodating densities from Aluminum (2560 kg/m³) to Gold (19320 kg/m³)",
            "Ensured the design integrated standard Commercial Off-The-Shelf (COTS) components, such as Neycraft crucibles and standard-sized investment flasks, for ease of use and replacement",
            "Prioritized student safety in the university lab environment throughout the design and operational procedure development"
        ],
        how: [
            "Initiated the design with fundamental fluid mechanics calculations to determine critical parameters like required centrifugal force and motor torque, working backward through the system's force flow",
            "Conducted extensive analytical calculations for dynamic force flow and performed detailed stress analysis on critical mechanical components to ensure structural integrity and safe operation",
            "Utilized SolidWorks for the complete 3D CAD modeling of the machine and the generation of a detailed fabrication plan for all unique components",
            "Selected an articulated rotating arm design to ensure optimal directional force application on the molten metal and allow for higher operational torques",
            "Implemented an electric motor and gearbox system, coupled with a controller, to provide precise and adjustable torque and rotation speed, a key improvement over spring-driven alternatives"
        ],
        result: [
            "Successfully designed, fabricated from raw materials, and assembled all unique mechanical components of the centrifugal casting machine within the university workshop",
            "Engineered and integrated the electronic control system, including power supply and motor controller, and fine-tuned the controller firmware to achieve desired performance with the selected motor",
            "Developed a comprehensive investment casting process guide and a robust Safe Operating Procedure (SOP) tailored for the HSRW FabLab.blue, adhering to German safety standards",
            "Delivered a machine with the significant advantage of precisely controllable casting parameters (torque and speed), offering flexibility for various metals and casting requirements"
        ]    
    },
    {
        id: "WorldMap",
        anchor: "WorldMap_anchor",
        title: "Interactive World Map",
        description: "An interactive world map display using LEDs and touch sensors",
        link: "https://hinkleaj.github.io/Interactive_World_Map/",
        video: "./assets/img/portfolio/WorldMap03.mp4",
        images: ["./assets/img/portfolio/WorldMap01.jpg", "./assets/img/portfolio/WorldMap02.jpg"],
        what: [
            "Developed an interactive, wall-mounted world map composed of six individually CNC-milled wooden panels arranged in a 2x3 grid on a custom backplate",
            "Engineered each panel to feature gesture-controlled backlighting, with seven ultrasonic sensors enabling users to activate or deactivate LED illumination for specific continents or the entire map",
            "Designed the map with a shallow profile and integrated shadow box construction to discreetly house all electronic components and wiring, creating a seamless and artistic wall piece"
        ],
        how: [
            "Executed the physical design using SolidWorks for 3D modeling of the frame and panels, and utilized Fusion 360 for generating CAM (Computer-Aided Manufacturing) paths for CNC milling",
            "Built a custom Arduino-compatible control board around an ATMega328P microcontroller for processing ultrasonic sensor input (gesture detection) and managing addressable LED strip lighting, with firmware developed in the Arduino IDE",
            "Created the electronic schematic and PCB (Printed Circuit Board) layout using KiCAD, followed by CNC milling of the custom main board and breakout boards, which were then populated and soldered by hand",
            "Leveraged 3D printing to fabricate custom parts for organized cable routing, component mounting, and creating protective enclosures for the electronics, ensuring a clean and integrated system"
        ],
        result: [
            "Successfully delivered a fully functional and aesthetically pleasing interactive world map, featuring seamlessly integrated electronics, a sleek design with hidden wiring, and captivating backlit panels",
            "Effectively implemented gesture-based control via an array of ultrasonic sensors to intuitively activate and toggle the LED lighting for different geographical regions",
            "Produced a unique art piece that merges smart technology with craftsmanship, offering an engaging user experience with minimal visible hardware and a clean wall-mounted presentation"
        ]   
    },
    {
        id: "Ceilometer",
        anchor: "Ceilometer_anchor",
        title: "LIDAR Ceilometer",
        description: "A LIDAR-based device for measuring the height of clouds in real-time",
        link: "javascript:void(0)",
        images: ["./assets/img/portfolio/Ceilometer01.png", "./assets/img/portfolio/Ceilometer02.png", "./assets/img/portfolio/Ceilometer03.png"],
        what: [
            "Led a Research & Development project to design and prototype a low-cost, eye-safe LiDAR-based ceilometer for the Institut für Energietransformation, funded by an Interreg Deutschland-Nederland grant",
            "The primary goal was to develop a proof-of-concept device capable of accurately measuring the altitude of the cloud base in real-time (target range 0.5-1.5 km) to improve flight safety and operational efficiency for local pilots and glider clubs",
            "This project was undertaken as a 5-month, full-time internship focused on delivering a commercially viable system for small airports lacking sophisticated telemetry"
        ],
        how: [
            "Conducted extensive research into LiDAR principles, existing ceilometer technologies, atmospheric absorption/scattering effects, and relevant safety standards (German Weather Service, Dutch standards) to inform design decisions",
            "Performed optical and electronic component selection based on detailed calculations, including laser power requirements, detector sensitivity (Multi-Pixel Photon Counter - MPPC), and optical component specifications (lenses, band-pass filters)",
            "Designed custom mechanical components, including a specialized lens collimation tube and an optics mounting system, using SolidWorks for CAD and Fusion 360 for CAM",
            "Utilized Eagle for the schematic design and PCB layout of custom circuits for both the laser transmission and detector reception systems",
            "Fabricated and assembled optical and mechanical components, including machining the collimation tube from aluminum and developing a retainer for the band-pass filter",
            "Built and tested electronic circuits, including an instrumentation amplifier for the MPPC signal and the laser driver circuit, troubleshooting issues related to signal noise, amplification, and component specifications"
        ],
        result: [
            "Successfully selected and specified key optical components: a suitable laser diode (e.g., 658 nm VCSEL), a Hamamatsu Multi-Pixel Photon Counter (MPPC), a narrow band-pass filter (e.g., 660nm ±2nm), and appropriate collimating and condensing lenses",
            "Designed, fabricated, and validated a custom threaded collimation tube for precise alignment of the laser diode and collimating lens, and an optics mounting system including a CNC-machined retainer for the band-pass filter",
            "Built and tested the necessary electronic circuits, including the detector circuit with its instrumentation amplifier and the laser diode driver circuit, achieving proof-of-concept for the core LiDAR detection mechanism",
            "Significant progress was made on the overall ceilometer prototype design and assembly, laying a strong foundation for future completion and potential commercialization, despite some final system integration and testing being impacted by external factors (e.g., COVID-19, budget constraints)"
        ]   
    },
    {
        id: "ROSRobot",
        anchor: "ROSRobot_anchor",
        title: "ROS Robot",
        description: "ROS project implementing autonomous environment mapping and navigation",
        link: "javascript:void(0)",
        images: ["./assets/img/portfolio/ROSRobot03.jpg", "./assets/img/portfolio/ROSRobot01.png", "./assets/img/portfolio/ROSRobot02.png"],
        what: [
            "Developed and implemented a Robot Operating System (ROS) project focused on autonomous environment mapping and navigation using a TurtleBot platform",
            "The project involved creating and configuring a ROS (Kinetic/Indigo on Linux/Ubuntu) workspace to establish communication between nodes (publisher/subscriber) and execute robot control scripts for both simulated and real-world scenarios",
            "Utilized ROS tools such as Gazebo for physics-based simulation of robot motion and environments, and RVIZ for visualizing sensor data, robot states, and map creation"
        ],
        how: [
            "Established a ROS development environment by creating workspaces and building custom packages (using catkin_make, catkin_create_pkg) with necessary dependencies (e.g., std_msgs, rospy, roscpp)",
            "Developed Python scripts to implement ROS publisher and subscriber nodes for inter-process communication and to control robot behavior, including movement patterns like squares and circles",
            "Employed ROS Gmapping (gmapping_demo) for Simultaneous Localization and Mapping (SLAM) to create 2D maps of both virtual environments (e.g., WillowGarage world, custom Gazebo worlds) and physical lab spaces using the TurtleBot's onboard sensors (e.g., Kinect)",
            "Implemented autonomous navigation in mapped environments using ROS AMCL (Adaptive Monte Carlo Localization) (amcl_demo), enabling the TurtleBot to navigate to specified goal coordinates and orientations",
            "Managed the physical TurtleBot by establishing remote SSH connections, launching ROS nodes on the robot's onboard computer, setting the ROS_MASTER_URI for distributed communication, and utilizing teleop packages for manual control during mapping"
        ],
        result: [
            "Successfully created functional ROS publisher/subscriber nodes in Python, demonstrating reliable real-time data exchange and communication within the ROS framework",
            "Demonstrated proficient use of Gazebo and RVIZ for simulating robot behavior, visualizing sensor data (e.g., DepthCloud, Costmap), and debugging navigation algorithms",
            "Effectively mapped both simulated and real-world environments using the TurtleBot and ROS Gmapping, producing .pgm map images and .yaml configuration files",
            "Achieved successful autonomous navigation of the TurtleBot to multiple predefined target points and orientations within a mapped environment using Python scripts and ROS AMCL, including inherent obstacle avoidance capabilities",
            "Developed reusable Python scripts for controlling robot motion and executing multi-point navigation tasks, ensuring reliable map-saving and loading functionalities for persistent operation"
        ]   
    },
    {
        id: "SegwayRobot",
        anchor: "SegwayRobot_anchor",
        title: "Lego NXT Segway Robot",
        description: "Project using MATLAB Simulink to implement a controller in a Lego NXT model",
        link: "javascript:void(0)",
        images: ["./assets/img/portfolio/SegwayRobot01.png", "./assets/img/portfolio/SegwayRobot02.png"],
        video: "./assets/img/portfolio/SegwayRobot03.mp4",
        what: [
            "Developed and implemented a control system for a Lego NXT Segway robot using MATLAB and Simulink, focusing on achieving stable self-balancing",
            "The project involved modeling the Segway's dynamics, designing a state-space controller, and simulating the system's performance with both linear and non-linear models",
            "The ultimate goal was to program the physical Lego NXT Segway to balance and respond to control inputs based on the developed controller"
        ],
        how: [
            "Modeled the Segway's dynamics by first establishing a non-linear mathematical model based on differential equations representing the plant",
            "Linearized the non-linear system around an operating point using specified assumptions to facilitate controller design",
            "Derived a State Space Model (SSM) from the linearized state equations, representing the system in terms of state variables, inputs, and outputs",
            "Simulated both the non-linear and linearized models in MATLAB/Simulink, comparing their responses under various initial conditions to validate the linearization and understand system behavior",
            "Assessed the controllability of the linearized system and designed a state-space controller by employing the pole placement method to calculate appropriate controller gains for desired closed-loop performance",
            "Implemented the designed state-space controller within a closed-loop control system in Simulink for the linearized model and subsequently applied and tested it on the original non-linear model",
            "Deployed the developed controller onto the physical Lego NXT Segway hardware"
        ],
        result: [
            "Successfully created and simulated both non-linear and linear models of the Segway robot, enabling comparative analysis of their dynamic responses",
            "Designed a state-space controller with gains determined via pole placement, demonstrating a systematic approach to control system design",
            "Generated a closed-loop control system for the state-space model, simulating its performance and plotting key variables (e.g., state trajectories, control effort) to verify stability and response characteristics",
            "Effectively implemented the state-space controller on the non-linear model, showing the controller's robustness and performance in a more realistic system representation",
            "Achieved stable self-balancing and control of the physical Lego NXT Segway robot through the implemented MATLAB/Simulink controller"
        ]   
    },
    {
        id: "LiftPointFEA",
        anchor: "LiftPointFEA_anchor",
        title: "LiftPoint FEA",
        description: "FEA on a 20-ton lifting point to prove maximum working loads under two load cases",
        link: "javascript:void(0)",
        images: ["./assets/img/portfolio/LiftPointFEA3.png", "./assets/img/portfolio/LiftPointFEA1.png", "./assets/img/portfolio/LiftPointFEA2.png"],
        what: [
            "Conducted a comprehensive Finite Element Analysis (FEA) on a RUD B-ABA 20-ton lifting point to verify its structural integrity under maximum working loads",
            "The primary objective was to determine a suitable steel material and ensure the lifting point could withstand specified design loads without plastic yielding or rupture, adhering to predefined safety factors",
            "Analyzed the lifting point's performance under two distinct static load cases: a direct tensile load (0° transverse, 0° longitudinal) and an offset load (30° transverse, 30° longitudinal), both at 196.2 kN (20 tons)"
        ],
        how: [
            "Utilized ANSYS Workbench to perform the FEA, beginning with the simplification of the provided CAD geometry to optimize the simulation",
            "Leveraged symmetry conditions for Load Case 1 to reduce the analysis domain by a factor of four, allowing for a finer mesh and more accurate results within software limitations. For Load Case 2 (asymmetric loading), the full model was analyzed",
            "Applied appropriate boundary conditions, including compression-only supports for the base plate, fixed supports to simulate bolt connections, and an approximation of bolt pretension (380 kN for M24 Class 12.9 bolts per VDI 2230) as a pressure load on bolt hole contact faces. Loads were applied as remote forces",
            "Performed iterative mesh refinement, starting with a default mesh and progressively refining it (using body, vertex, and face sizing) in areas of high stress concentration to ensure convergence of stress results (less than 3% change between final mesh iterations)",
            "Selected a high-strength quenched and tempered alloy steel, 34CrNiMo6 (EN 1.6582 +QT), based on the initial stress analysis and its material properties",
            "Assessed results against DIN EN 10002-1 and VDI 2230 standards, using the Von Mises stress criterion to evaluate multi-dimensional stress states"
        ],
        result: [
            "Successfully validated that for the selected material, the maximum local Von Mises stresses under the most demanding load case remained well below the material's yield strength and the calculated maximum local allowable stress",
            "Confirmed that the chosen material provides a safe design, capable of handling the 20-ton working load limit under various orientations while satisfying the required safety factors against plastic yielding and rupture",
            "Achieved a converged FEA solution demonstrating that the stress distribution throughout the lifting point remains below the yield strength, thereby validating the structural integrity and durability of the design for its intended application",
            "The maximum equivalent elastic strain observed in the re-analysis with the selected material (0.358%) was significantly below the material's total endurable elongation limit (5.97%)"
        ]   
    },
    {
        id: "IVPSolver",
        anchor: "IVPSolver_anchor",
        title: "IVP Solver",
        description: "Co-project aimed at implementing different numerical methods for solving IVPs",
        link: "https://github.com/Hinkleaj/IVP_Solver",
        images: ["./assets/img/portfolio/IVPSolver01.png", "./assets/img/portfolio/IVPSolver02.png", "./assets/img/portfolio/IVPSolver03.png"],
        what: [
            "Collaborative project with Sophia Felicia Salome Döring focused on implementing and evaluating numerical solvers for Initial Value Problems (IVPs)",
            "Developed three solver variants in MATLAB: constant step-size implicit Euler, and two adaptive step-size algorithms",
            "Analyzed solver performance using test cases with known analytical solutions to compare accuracy and computational efficiency"
        ],
        how: [
            "Implemented a constant step-size implicit Euler method using the Newton-Raphson method for non-linear root finding",
            "Designed two adaptive step-size algorithms: one based on second-derivative ratio control, and another minimizing Mean Square Error (MSE) via gradient descent",
            "Evaluated each method on three distinct IVPs: a linear ODE, a nonlinear ODE, and a problem with variable coefficients, enabling direct comparison with analytical solutions"
        ],
        result: [
            "Adaptive step-size algorithms significantly outperformed the constant step-size method in accuracy, especially for stiff or rapidly varying solutions",
            "The second-derivative method achieved the highest accuracy, while the MSE-based method offered a strong balance between accuracy and computational speed",
            "Provided well-documented, modular MATLAB code with detailed comments and visualizations, supporting reproducibility and educational reuse",
            "Final report includes comprehensive results analysis, method critique, and suggestions for future research directions"
        ]   
    }
];









