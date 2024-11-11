# Game Top-Up Service

A Next.js project that allows users to top up their game accounts and store the data to local storage for saving the data transaction

## Features

- User-friendly interface for submitting game top-up requests.
- Store user data including user ID, zone ID, and WhatsApp number.
- Utilize Zustand for state management and persist data locally.

## Tech Stack

- **Next.js**: A React framework for production.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Zustand**: A small, fast, and scalable state-management solution.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/helmyfadlail/topup-game.git topup-game
   cd topup-game
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Running project:**

   ```bash
   npm run dev
   ```

## Usage

### How to top up game

1. **Navigate to the Home**:
   Open your browser and navigate to the home page of the application, and then choose what game you want for top up.

2. **Navigate to the Detail Product Game**:

   - **Select Item Diamond**: Select diamond what you want by clicking on the diamond card.
   - **User ID**: Input the user ID in the designated field.
   - **Zone ID**: Input the zone ID in the designated field.
   - **WhatsApp Number**: Input the WhatsApp number in the designated field.
   - **Select Payment Method**: Select payment method what you want by clicking on the payment logo card
   - **Click Buy Button**: After selecting the diamond item, input userId, zoneId, whatsappNumber, and then select the payment method then click the buy button at the bottom right of the application.
   - **Showing Popup Confirmation**: After clicking the buy button, a confirmation notification will appear for the price and account. If you are sure with your account and pricing click order.

3. **Navigate to the Invoice Pending and Success**:
   After pressing the order confirmation button, it will be directed to the invoices page. Wait for approximately 5 seconds and the payment will be automatically successful.

4. **Check Order Transaction**:
   Above the header there is a button called `check transaction`, then click the button which will be directed to the order history page. On the page you can see the transactions from the purchases you have made.

### Example User Data

Below is an example of the user data to be entered:

- **User ID**: `88178798`
- **Zone ID**: `4567`

### Note

- Ensure all fields are filled correctly before submitting.
- The WhatsApp number is optional.

By following these steps, you can efficiently manage game top-up requests with user ID, zone ID, and WhatsApp number. If you encounter any issues or have any questions, feel free to reach out for support.
