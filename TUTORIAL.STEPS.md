# Tutorial Steps

## Setup

1. Take starter code from the branch `main` and open it
2.
`npm install`
`pnpm i -D flowbite-svelte flowbite`
`pnpm i -D flowbite-svelte-icons`

## MongoDB

1. Create account on https://www.mongodb.com/atlas
2. Create new cluster - Amazon AWS - N. Virginia is recommended because that is what I did!
3. Create an admin user which is project onwer - 

4. Copy connection string - if you have to make an IP before doing so, press access from anywhere -- USE DEFAULT IP
5. Paste it in the .env file on the top line labeled "SECRET_MONGODB_URI" after the equals (make sure to put it in quotes)
6. Go to https://jwtsecret.com/generate and generate a JWT Secret with 32 characters
7. Copy the JWT (make sure it the full JWT)
8. Paste it in the .env file on the line labeled "SECRET_JWT_KEY" fter the equals (make sure to put it in quotes)
9. Terminal - npm run dev