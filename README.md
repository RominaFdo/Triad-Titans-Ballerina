# Triad Titans – Gas Delivery App (Ballerina Competition)

A domestic gas (LPG cylinder) ordering and home-delivery web app, started by team **Triad Titans** in 2024 for the Ballerina competition organized by WSO2.

## What's here

Static HTML/CSS/JS pages:

| Page | File | Description |
|------|------|-------------|
| Landing | `Landing.html` | Home page with about, services, location and contact sections |
| Login | `login.html` | Customer login |
| Sign up | `Signup.html` | Customer account creation |
| Place order | `orderPage.html` | Choose a cylinder (new or refill) and place an order |
| Dashboard | `dashboard.html` / `dashboard.js` | Customer profile and order history (uses hard-coded sample data) |
| Order details | `orderDetails.html` | Details of a single order |
| Driver registration | `regDriver.html` | Form for adding delivery drivers |

Images and icons are in `assests/`.

## What's missing

- **Backend:** The plan was a Ballerina service with a MySQL database for auth, orders and drivers. None of it was written.
- Forms are not connected to anything, and the dashboard shows mock data.

## Running it

There's no build step. Open `Landing.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server
```

## Team

Triad Titans: Shiny Fernando, Naduni Wimalarathna, Sithumini Abeysekara
