# Nodejs Expressjs MongoDB Bicycle API

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Andrii-25/bicycle-app.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`

    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.

## How to run

### Running API server locally

```bash
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
App is running...
Connected to mongodb:YOUR_DB_CONNECTION_STRING
```

**Note:** `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

## Routes

### GET Routes

- /bicycles - to get all bicycles
- /bicycles/count - to get count of bicycles
- /bicycles/available - to get count of available bicycles
- /bicycles/price/avg - to get avg price of bicycles

### POST Routes

- /bicycles - to add one bicycle

### PATCH Routes

- /bicycles/:id - to update one bicycle
- /bicycles/status/:id - to update status of one bicycle

### DELETE Routes

- /bicycles - to remove all bicycles
- /bicycles/:id - to remove one bicycle

## Link to deployed app
- http://18.221.6.130:3000/bicycles
