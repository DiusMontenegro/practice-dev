<?php
    header('Content-type: text/css');
?>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
    font-family: Arial, Helvetica, sans-serif;
}
#login-page {
    background-color: #3b5998;
    color: #f7f7f7;
    padding: 20px 0px;
}
    .container {
        margin: 0px auto;
        width: 1000px;
    }
    #headings {
        width: 39.5%;
        vertical-align: top;
        display: inline-block;
    }
    #alerts {
        height: 200px;
    }
    h1 {
        font-size: 60px;
        margin-bottom: 10px;
    }
    h3 {
        font-size: 20px;
        margin-bottom: 5px;
    }
    #forms {
        width: 60%;
        height: 100%;
        vertical-align: top;
        display: inline-block;
        padding: 30px 80px;
        background-color: #f7f7f7;
        border-radius: 20px;
        -webkit-box-shadow: 3px 3px 19px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 3px 19px -4px rgba(0,0,0,0.75);
        box-shadow: 3px 3px 19px -4px rgba(0,0,0,0.75);
    }
    form {
        padding: 20px 20px 10px 20px;
        width: 100%;
    }
    #login-form input {
        font-size: 18px;
        margin-bottom: 10px;
        height: 40px;
        display: block;
        width: 100%;
        border-radius: 2px;
        padding-left: 4px;
        border: 1px solid gray;
    }
        #log-in {
            cursor: pointer;
            font-weight: bold;
            color: white;
            background-color: #3b5998;
            border: none;
        }
    #reset-form {
        padding: 0px;
    }
        #reset {
            display: block;
            margin: 0px auto;
            font-size: 18px;
            width: 35%;
            padding: 0px;
            border: none;
            background-color: none;
            cursor: pointer;
            color: #3b5998;
        }
    #registration {
        color: black;
        padding: 10px 20px 0px 20px;
    }
        h5 {
            font-size: 24px;
            margin: 10px 0px 4px 0px;
        }
        h6 {
            font-size: 14px;
            border-bottom: 1px solid gray;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        #registration input {
            font-size: 18px;
            padding-left: 4px;
            width: 49.2%;
            height: 40px;
            margin-bottom: 10px;
        }
        #registration #registration-email,
        #registration #password, #registration #contact_number {
            width: 100%;
        }
        #register {
            font-size: 16px;
            display: block;
            margin: 0px auto;
            background-color: #42b72a;
            color: #f7f7f7;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
        }
.authorized-page {
    padding-top: 40px;
    background-color: #f7f7f7;
}
.logged {
    width: 400px;
    height: 500px;
    margin: 0px auto;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 3px 3px 19px -4px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 3px 19px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 19px -4px rgba(0,0,0,0.75);
}
    img {
        width: 100%;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 18px;
        margin: 20px 0px 40px 0px;
    }
    a {
        color: #3b5998;
        text-decoration: none;
        font-size: 18px;
    }
.success, .errors {
    width: 100%;
    padding: 4px 6px;
    text-align: center;
}
    .errors {
        background-color: rgba(255, 0, 0, 0.5);
        margin-bottom: 2px;
    }
    .success {
        background-color: rgba(0, 255, 0, 0.5);
    }



