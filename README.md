# cs5520-assignment2
This is an expense tracker app, which is connected to a firebase Firestore database. User can add, edit, delete and get data from database.  
There are 4 screens in this app which user can navigate to them using a nested navigation(a bottom tab navigator inside a native stack navigator):  
1.All Expenses: show a list of expense items.   
![Alt text](./images/screenshots/allexpenses.png?raw=true "allexpenses")  
2.Important Expenses: show a list of important expense items.
![Alt text](./images/screenshots/importantexpenses.png?raw=true "importantexpenses")  
3.Edit Expense: Tapping each expense item in the list (on both all and important expenses screens) navigate to Edit Expense screen. This screens show two buttons to the user, to delete an expense item, or mark it as important. An alert will be shown to the user to confirm the action.   
![Alt text](./images/screenshots/editexpense.png?raw=true "editexpense")  
4.Add Expense: From both All Expenses and Important Expenses screens, the user can navigate to Add Expenses screen by pressing on header button. Add Expense screen shows a form to the user to add an expense item with amount and description values. User's entry will be validated(e.g. no negative number, or letters for amount, no empty submission,...).  
![Alt text](./images/screenshots/addexpense.png?raw=true "addexpense")  




