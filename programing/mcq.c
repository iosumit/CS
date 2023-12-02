#include<stdio.h>
// void f(){
//     static int a=3;
//     int b=5;
//     a-=b++;
//     printf("%d\t%d\n", a,b);
// }
// int main(){
//     static int a=2;
//     int b=1;
//     f();
//     a+=3;
//     f();
//     printf("%d\t%d",a,b);
//     return 0;
// }
// -2      6
// -7      6
// 5       1%  

// int main(){
//     int *A[10];
//     int B[10][10];
//     A[2]=10;  //<======Error
//     A[2][9]=10;
//     B[1]=4;   //<======Error
//     B[2][3]=4;
//     return 0;
// }

int main(){
    int arr[]  ={1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip=arr+4;
    printf("%d\n", ip[1]); // <==== 6
    return 0;
}