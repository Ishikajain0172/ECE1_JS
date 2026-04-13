var grade="A";
document.write("Entering switch block<br/>");
switch(grade){
    case "A":
        document.write("Excellent!<br/>");
        break;  
    case "B":
        document.write("Good!<br/>");
        break;                                                                  
    case "C":
        document.write("Passed!<br/>");
        break;
    case "D":
        document.write("Better luck next time!<br/>");
        break;
    default:
        document.write("Invalid grade!<br/>");
}
document.write("Exiting switch block!");

//switch statement