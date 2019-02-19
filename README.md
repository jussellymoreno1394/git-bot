# GitBot Assistant 🤖


**Introduction:**

This incredible idea arose because we wanted to make a thirty days commit challenge and we wanted to know how many days in a row a given GitHub user had made a commit, so we decided to create an app for making the consults in an easy and fast.

**Tools to use 🛠:**

- Twilio Autopilot.
- Twilio functions.
- GitHub API.
- Slack.
- Slack Outgoing WebHook App.
- Code to be implemented.

**Observations🔍:**
- Does not work with private channels.

---
## Part 1: Twilio - Autopilot

<p align="center"><img width="324" alt="captura de pantalla 2019-02-19 a la s 11 52 52 a m" src="https://user-images.githubusercontent.com/32177779/53033904-254f0e00-3440-11e9-9485-fa88800973be.png"></p>


**First of all, what is Twilio Autopilot?**  💬 

In a short way Twilio Autopilot is a conversational AI platform to build intelligent bots, IVRs, and Alexa apps that work.


To start with the funny tutorial you need to: 

- go to [Twilio home page](https://www.twilio.com/) because you need to sign in to start with the project so, if you don't have an account you should create one.

- When you get in, you will get an option called Products, and then will see a lot of options but in this case you gotta select Autopilot.

- Give a name to your project.✏️

- Now that your project is getting form, let's go to the left side bar and select in the tab called Runtime.


### In this part you are going to create 2 functions:

<p align="center"><img width="327" alt="captura de pantalla 2019-02-19 a la s 12 18 26 p m" src="https://user-images.githubusercontent.com/32177779/53034102-8840a500-3440-11e9-96ef-ceed4dc3384e.png"></p>


**How to create functions?**

- Inside  the Runtime tab you will see an option called Function, click on it. 

- Click on Create Function.

- Select the **Blank** template and then, click on **Create**, then give a name to the function and also to the PATH.

- Repeat the last step to create the second function you need for this project.

**_Note:_** Uou need to save each function URL to use it later.

Within the functions you will add the code, which will give life to the GitBot, for this use the suplied code and paste it into one of the functions you have created, do this step for the another created function.



The project  is using some dependencies so, you need to add that in the Configure of the Functions.

In this case you will use **moment** and **axios**, and for this you go to the sub-tab which is inside **Functions** called **Configure** and you add our dependencies.



### Let's create the assistant ⚙

- Let's go to the **Autopilot** tab and click in **Create Assistant** button.

- Now that you have created the assistant lets go create the task's, for that:  

- Go to the **Tasks** sub-tab inside the assistant and create 2. 

- The first task is the one that will serve us to welcome in the Slack channel and the other is the one you will use to return the answer you want.

- Being in the first task, click on **HTTP CALLBACK URL** and replace that URL with the URL of the function that you created before and now do the same with the other task, remembering that each task is related to a function.

---

## Part 2: Slack 👓


In this project you are using Slack as a channel so…

**What is Slack?** 🤔

Slack is a collaboration hub where you and your team can work together to get things done.


<p align="center"><img width="704" alt="captura de pantalla 2019-02-19 a la s 11 52 21 a m" src="https://user-images.githubusercontent.com/32177779/53033771-cb4e4880-343f-11e9-96d0-638fb9d5b763.png"></p>


**for this project:**

- Create a public channel in Slack, should be public because if it is private it wont work.

- Click on the name of the workspace and then on **Customize Slack**. This will send you to a web page.

- Inside the page, on the left there will be a **Menu**.

- You will find a tab called **Configure apps**.

- In the upper right corner you will find a magnifying glass, in which you can find the tool you need called **Outgoing WebHook**, click and enter it.

- Click on **Add Configuration** and then on, **Add Integration**.

- Within the added integration, select the channel created to test previously.

- In the URL field add this address https://channels.autopilot.twilio.com/v1/<ACCOUNT_SID>/<ASSISTANT_SID>/slack, replacing the fields.

- To get the <ACCOUNT_SID> and <ASSISTANT_SID> you must go to the **Autopilot** tab and click on the assistant and then, in properties.

- Give your assistant a description, a name and an image.

- Now, go to the channel where you added your bot and invoke it with the name you give it, then you will have to send it in response the username of GitHub you want to know how many consecutive days you have been committing.



<p align="center"><img width="708" alt="captura de pantalla 2019-02-19 a la s 12 41 29 p m" src="https://user-images.githubusercontent.com/32177779/53035594-d014fb80-3443-11e9-857f-c924b933b872.png"></p>
<p align="center">This is how the GitBot works</p>

**_Note:_** The name for the invocation is defined in one of the Twilio functions.

The creation of a **Router** in Natural Language, in this case is not necessary.
