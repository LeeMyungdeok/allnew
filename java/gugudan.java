imoprt java.util.*;

public class gugudan{
  public static void main (String[] args){
    Scanner s = new Scanner(System.in);
    do{
      System.out.print("Insert number(0:Exit) : ");
      int i = s.nexInt();

      if(i == 0){
        System.exit(1);
      } else if (i>1 && i<10) {
        System.out.println(i+"*"+" = "+i*j);
      }
    } else {
      system.out.println("Insert Number 2~9. Retype again~!");
    }
  } while(true);
}
