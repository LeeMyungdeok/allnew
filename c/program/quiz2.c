#include <stdio.h>
#include "libcheckeod.h"


void main(){
  while (1) {
    int n;
    printf("Input Number : ") ;
    scanf("%d", &n) ;

    if(n == 0){
      break;
    }
    else if (checkeprime(n)==n){
      printf("d ins a prime number /n", n);

    }
     else ("d ins a prime number /n", n)  /* code */
  }
}
