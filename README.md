# Meal Prep

Meal Prep is an application based meal prep ordering service

# Purpose 

In order to make ordering and employee management easier for our client, They requested an application to facilitate the following components. 

`Login`
`Register`
`Welcome`
`EmployeeList`
`EmployeeDetails`
`OrderList`
`OrderDetails`
`NewOrder`
`OrderForm`
`SalesReport`
`ApplicationViews`

By implementing the above components the Client will now be able to manage `EmployeeList` and `OrderList` through editing the details of a specific order or employee, as well as deleting that employee or order. Also the client will be able to create a `NewOrder` while adding a new customer object to the database simultaneously, creating new customer related data as well as user/admin related data associated with that order. `SalesReport will be implemented in v2.0 ` 

# ERD
<img src="public/screenshots/Screenshot 2025-02-13 at 1.07.34 PM.png">

# WireFrame
<img src="public/screenshots/Screenshot 2025-02-13 at 12.58.15 PM.png">
* Copy this Link in order to navigate through WireFrame

```sh
https://miro.com/app/board/uXjVLrobU3Y=/?share_link_id=656733714841
```

## Installation
*Run these commands one at a time 

```sh
git clone git@github.com:DarrenRaines-K9/capstone.git
cd capstone
cd api 
json-server database.json -p 8088
..
npm run dev
```

# How Was It Developed?

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)

# How Does It Work?
<p>

`Given`: the User(Admin) wants to (Login)<br>
`When`: the User(Admin) clicks on (Login)<br>
`Then`: The User(Admin) should be navigated to the (Dashboard)<br>

`Given`: the User(Admin) wants to (Login)<br>
`When`: the User(Admin) clicks on (Login)<br>
`Then`: The User(Admin) should be navigated to the (Dashboard)<br>

`Given`: the User(Admin) wants to (ViewOrders)<br>
`When`: the User(Admin) clicks on (Orders)<br>
`Then`: The User(Admin) should be navigated to the (Orders Page)<br>

`Given`: the User(Admin) wants to view an (OrdersDetails)<br>
`When`: the User(Admin) clicks on the  (Order)<br>
`Then`: The User(Admin) should be navigated to the (OrderDetails Page)<br>

`Given`: the User(Admin) wants to delete an (Order)<br>
`When`: the User(Admin) clicks  on the (DeleteOrder Button)<br>
`Then`: The User(Admin) should see an alert window (Order Deleted) and redirected to the (Orders Page)<br>

`Given`: the User(Admin) wants to edit an (OrdersDetails)<br>
`When`: the User(Admin) clicks on the  (EditOrder Button)<br>
`Then`: The User(Admin) should be navigated to the (Update OrderDetails Page)<br>

`Given`: the User(Admin) has updated the (OrdersDetails)<br>
`When`: the User(Admin) clicks on the  (Update Button)<br>
`Then`: The User(Admin) should see a window alert (OrderDetails Updated) and the reflected changes should appear <br>

`Given`: the User(Admin) wants to view (Employees)<br>
`When`: the User(Admin) clicks on the (Employees)<br>
`Then`: The User(Admin) should be navigated to the (Employees Page)<br>

`Given`: the User(Admin) wants to edit an (EmployeeDetails)<br>
`When`: the User(Admin) clicks on the  (Update Button)<br>
`Then`: The User(Admin) should be navigated to the (Update EmployeeDetails Page)<br>

`Given`: the User(Admin) has updated the (EmployeeDetails)<br>
`When`: the User(Admin) clicks on the  (Update Button)<br>
`Then`: The User(Admin) should see a window alert (EmployeeDetails Updated) and the reflected changes should appear <br>

`Given`: the User(Admin) wants to delete an (Employee)<br>
`When`: the User(Admin) clicks on the  (Delete Button)<br>
`Then`: The User(Admin) should see a window alert (Employee Deleted) and the reflected changes should appear <br>

`Given`: the User(Admin) wants to (Place Order)<br>
`When`: the User(Admin) clicks on (Place Order)<br>
`Then`: The User(Admin) directed to the (Place Order Page)<br>

`Given`: the User(Admin) has selected an entree,side, and drink and wants to go to (OrderDetails)<br>
`When`: the User(Admin) clicks on (Order Details)<br>
`Then`: The User(Admin) directed to the (Order Form)<br>

`Given`: the User(Admin) wants to (Submit an Order)<br>
`When`: the User(Admin) clicks on (Submit)<br>
`Then`: The User(Admin) should see a window alert (Order Submitted)<br>
</p>