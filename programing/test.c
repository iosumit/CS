#include <stdio.h>
#include <stdlib.h>

// int x(){
//     int x = 20;
//     printf("%d", x);
//     return 10;
// }
// int main(){
//     int x = 1000;
//     printf(x());
//     return 8;
// }

struct Ournode{
    char x, y, z;
};
int main() {
    struct Ournode p={'1', '0'+2, 'a'+2};
    struct Ournode *q=&p;
    printf("%c, %c", *((char*)q+1), *((char*)q+1));
    return 0;
}