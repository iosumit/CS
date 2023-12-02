#include <stdio.h>
#include <stdlib.h>
struct Node{
        int value;
        struct Node *next;};
int main( ) {
    struct Node *boxE, *head, *boxN; int index=0;
    boxE=head= (struct Node *) malloc(sizeof(struct Node));
    head->value = index;
    for (index =1; index<=3; index++){
        boxN = (struct Node *) malloc (sizeof(struct Node));
        boxE->next = boxN;
        boxN->value = index;
        boxE = boxN; }
for (index=0; index<=3; index++) {
    printf("Value at index %d is %d\n", index, head->value);
    head = head->next;
    printf("Value at index %d is %d\n", index+1, head->value); } }