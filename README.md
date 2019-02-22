# GitBot Assistant 🤖


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


**First of all, what is Twilio Autopilot?**  💬 

In a short way Twilio Autopilot is a conversational AI platform to build intelligent bots, IVRs, and Alexa apps that work.


**To start with the tutorial you need to:**

- Go to [Twilio home page](https://www.twilio.com/) because you need to sign in to start with the project. If you don't have an account,  you will need to create one.


<p align="center"><img width="683" alt="captura de pantalla 2019-02-22 a la s 1 12 42 a m" src="https://user-images.githubusercontent.com/32177779/53223331-f81c7e80-363e-11e9-9721-c9c6107bb32e.png">
</p>


- Once logged into, you will see an option called **Products**. Select the **Autopilot** option.

- Give a name to your project.✏️

---

### In this part you are going to create 2 functions:

<p align="center"><img width="327" alt="captura de pantalla 2019-02-19 a la s 12 18 26 p m" src="https://user-images.githubusercontent.com/32177779/53034102-8840a500-3440-11e9-96ef-ceed4dc3384e.png"></p>


**How to create functions?**

- In the left side bar, select the tab called **Runtime**.

<p align="center"><img width="340" alt="captura de pantalla 2019-02-22 a la s 1 10 01 a m" src="https://user-images.githubusercontent.com/32177779/53223247-c3102c00-363e-11e9-8c49-f0fc0078d19a.png"></p>


- Inside  the **Runtime** tab you will see an option called **Function**, click on it. 

- Click on **Create Function**.

- Select the **Blank** template and then, click on **Create**, then give a name to the function and also to the **PATH**. Save each function URL to use it later.


<p align="center"><img width="706" alt="captura de pantalla 2019-02-21 a la s 12 19 27 p m" src="https://user-images.githubusercontent.com/32177779/53188506-89560b80-35d3-11e9-8916-e28b675d64c7.png"></p>


- Repeat the last step to create the second function you need for this project.

- Within the functions you will add the code, which will give life to the **GitBot**, for this use the suplied code and paste it into one of the functions you have created, do this step for the another created function.


- The project  is using some dependencies so, you need to add that in the **Configure** tab inside of **Functions**.

- In this case you will use **moment** and **axios**, and for this you go to the sub-tab which is inside **Functions** called **Configure** and you add our dependencies.



<p align="center"><img width="704" alt="captura de pantalla 2019-02-21 a la s 12 19 43 p m" src="https://user-images.githubusercontent.com/32177779/53188565-ad195180-35d3-11e9-90fe-322294d0d475.png"></p>

---

### Let's create the assistant ⚙

- Let's go to the **Autopilot** tab and click in **Create Assistant** button.

<p align="center"><img width="671" alt="captura de pantalla 2019-02-22 a la s 12 51 27 a m" src="https://user-images.githubusercontent.com/32177779/53222496-05843980-363c-11e9-8976-6b8be867ed3c.png"></p>


- Now that you have created the assistant lets go create the tasks, for that: 

- Go to **Autopilot** and click in the name of the created assistant.

<p align="center"><img width="677" alt="captura de pantalla 2019-02-22 a la s 12 54 10 a m" src="https://user-images.githubusercontent.com/32177779/53222611-64e24980-363c-11e9-95de-8f6878ba1682.png"></p>



- Go to **Tasks** inside the assistant and create 2. 

<p align="center"><img width="701" alt="captura de pantalla 2019-02-21 a la s 12 19 56 p m" src="https://user-images.githubusercontent.com/32177779/53188620-c6ba9900-35d3-11e9-978b-062c8042108c.png"></p>

- The first task is the one that will serve us to welcome (Hello Slack) in the Slack channel and the other (Answering Slack) is the one you will use to return the answer you want.

- Being in the first task, click on **HTTP CALLBACK URL** and replace that URL with the URL of the function that you created before and now do the same with the other task, remembering that each task is related to a function.

<p align="center"><img width="702" alt="captura de pantalla 2019-02-21 a la s 12 20 08 p m" src="https://user-images.githubusercontent.com/32177779/53188657-ddf98680-35d3-11e9-8b64-123e02f28957.png"></p>

### Create a Router in "Natural language Router

- You must go to "Natural Language Router" and create an example and assign it to the **Hello_Slack** task.

<p align="center"><img width="679" alt="captura de pantalla 2019-02-22 a la s 12 59 28 a m" src="https://user-images.githubusercontent.com/32177779/53222824-24cf9680-363d-11e9-84e0-6750eadd538f.png"></p>

- Being inside **Natural Language Router** with our created example, next to **Train Tasks**, you will see a tab called **Build Models**, create a model giving it a name.

<p align="center"><img width="677" alt="captura de pantalla 2019-02-22 a la s 1 02 12 a m" src="https://user-images.githubusercontent.com/32177779/53222923-8263e300-363d-11e9-9d1b-95dc18b83058.png"></p>

---

## Part 2: Slack 👓

In this project you are using Slack as a channel so…

**What is Slack?** 🤔

Slack is a collaboration hub where you and your team can work together to get things done.


**for this project we need to:**

- Create a public channel in Slack, should be public because if it is private it wont work.

- Click on the name of the workspace and then on **Customize Slack**. This will send you to a web page.

- Inside the page, on the left there will be a **Menu**.

- You will find a tab called **Configure apps**.

- In the upper right corner you will find a magnifying glass, in which you can find the tool you need called **Outgoing WebHook**, click and enter it.

<p align="center"><img width="668" alt="captura de pantalla 2019-02-22 a la s 1 05 00 a m" src="https://user-images.githubusercontent.com/32177779/53223050-146beb80-363e-11e9-94c0-b6fefb43ec8f.png"></p>


- Click on **Add Configuration** and then on, **Add Integration**.

- Within the added integration, select the channel created to test previously.

- In the URL field add this address https://channels.autopilot.twilio.com/v1/<ACCOUNT_SID>/<ASSISTANT_SID>/slack, replacing the fields.

<p align="center"><img width="687" alt="captura de pantalla 2019-02-22 a la s 1 05 22 a m" src="https://user-images.githubusercontent.com/32177779/53223099-3a918b80-363e-11e9-8526-4ef11dc2cdcf.png"></p>

- To get the <ACCOUNT_SID> and <ASSISTANT_SID> you must go to the **Autopilot** tab and click on the assistant and then, in properties.

<p align="center"><img width="679" alt="captura de pantalla 2019-02-22 a la s 1 05 34 a m" src="https://user-images.githubusercontent.com/32177779/53223122-5006b580-363e-11e9-90f3-a6745ffeeedb.png"></p>

- Give your assistant a description, a name and an image.

- Now, go to the channel where you added your bot and invoke it with the given name. You must send the GitHub user name in response to know how many days commit has done in a row.



<p align="center"><img width="708" alt="captura de pantalla 2019-02-19 a la s 12 41 29 p m" src="https://user-images.githubusercontent.com/32177779/53035594-d014fb80-3443-11e9-857f-c924b933b872.png"></p>
<p align="center"><b>This is how the GitBot works.</b></p>


**_Note:_** The name for the invocation is defined in one of the Twilio functions.
