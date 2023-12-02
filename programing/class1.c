
#include<stdio.h>
int main(){
    printf("Hiii Sumit,");
    printf("\nSize of char->%lu", sizeof(char));
    printf("\nSize of short->%lu", sizeof(short));
    printf("\nSize of int->%lu", sizeof(int));
    printf("\nSize of long->%lu", sizeof(long));
    printf("\nSize of long long int->%lu", sizeof(long long int));
    printf("\nSize of float->%lu", sizeof(float));
    printf("\nSize of double->%lu", sizeof(double));
    printf("\nSize of double->%lu", sizeof(long double));
    return 0;
}
// >> gcc -E class1.c >>  gcc -S class1.c >> gcc -c class1.s >> gcc -o 
// HLL                 HLL                 ASC                bin       bin  