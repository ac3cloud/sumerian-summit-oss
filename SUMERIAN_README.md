# Sumerian - Amplify Demo

This is based on this demo: https://docs.sumerian.amazonaws.com/tutorials/create/intermediate/amplify-react-2/

## AWS Profile Setup
My profile name is pm-tools.

```
aws-mfa --profile=pm-tools
export AWS_PROFILE=pm-tools
```

## Create a new amplify project and add in some required dependencies

```
yarn create react-app sumerian-amplify-app
cd sumerian-amplify-app
```

```
yarn add aws-amplify aws-amplify-react
```
## Sumerian Setup
Create a new scene using the Gesture Template

Add a script, custom under Christine
in setup section, add _window.host = this_;

Update GestureSpeech:
```
<speak><mark name="gesture:wave"/><break time=".5s"/>Hi everyone in the A W S Melbourne User Group<break time="1500ms"/></speak>
```


Create a new speech file under Christine
call it sayhi
```
<speak>Is Melbourne or Sydney the best City?</speak>
```

Update host under Christine under Animate Using Speech
Change Gesture Hold to be _2_



Publish privately and download the config:

```
mv ~/Downloads/sumerian_exports_*.json src/sumerian_exports.json
```


## Amplify Setup

### Amplify Init
```
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project sumerian-amplify-app
? Enter a name for the environment master
? Choose your default editor: Vim (via Terminal, Mac OS only)
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  yarn run build
? Start Command: yarn run start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use pm-tools
⠸ Initializing project in the cloud...
```

### Add in Auth
We need auth added to allow polly, sumerian to work with the AWS services.


```
amplify add auth
```

```
amplify push
```


### Hack in unauthenticated access


Find the "unauth role" in IAM/Roles

Add the following inline policy:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sumerian:ViewRelease"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "polly:*"
            ],
            "Resource": "*"
        }
    ]
}
```

In the cognito identity pool allow unauthenticated

## Copy in the main application
```
cp sumerian_App.js <project path>/src/App.js
```


## Publish and/or Run locally

Run locallly:
```
yar run start
```

Publish:
```
amplify add hosting
amplify publish
```
