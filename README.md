

# BookMyCook

**BookMyCook** is a React Native mobile application where users can book their nearest chef for events like weddings or for home use. Users can rate chefs, make payments, and more. Chefs can upload their recipes, register themselves, and set their hiring price.

## Features

- User Registration and Login
- OTP Verification
- Chef Booking System
- Ratings and Reviews
- Payment Processing
- Chef Recipe Upload

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### 1. Clone the Repository

To get started, clone the repository using the following command:

```bash
git clone https://github.com/tusharbhos/BookMyCookAPP.git 
```

### 2. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
cd BookMyCook
npm install
```

### 3. Run the Project

To start the development server and run the project, use the following command:

```bash
npx react-native run-android
```

Or for iOS:

```bash
npx react-native run-ios
```

### 4. Troubleshooting

#### i. Manually Starting the Emulator

If the emulator doesn't start automatically, you can start it manually by following these steps:

1. Open Android Studio.
2. Go to **AVD Manager**.
3. Select your emulator and click on **Start**.

Alternatively, you can start the emulator using the command line:

```bash
emulator -avd [your_emulator_name]
```

#### ii. Connecting a Physical Device

To run the app on a physical device:

1. Enable **Developer Mode** and **USB Debugging** on your device.
2. Connect your device to your computer via USB.
3. Run the following command:

```bash
adb devices
```

This will list your device. Now, run the project with:

```bash
npx react-native run-android
```

Or for iOS:

```bash
npx react-native run-ios
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. We appreciate any contributions that help improve BookMyCook!

