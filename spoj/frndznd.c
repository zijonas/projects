#include <stdio.h>

int calculate(int, int, int[]);
int calculate2(int, int, int[]);
int calculate3(int, int, int[]);


int main(int argc, char** argv) {

	int r = 0;
	int l = 0;
	int q = 0;
	int n = 0;

	scanf("%i %i", &n, &q);

	int ar[n];
	int i = 0;

	for(i = 0; i < n; i++) {
		scanf("%i",&ar[i]);
	}

	for(i = 0; i < q; i++){
		scanf("%i %i", &l, &r);
		printf("%i\n", calculate3(l, r, ar));	
	}

	return 0;
}

int calculate(int l, int r, int ar[]) {
	int temp = 0;
	int ret = 0;
	int tam_conj = r - l + 1;

	int	ini	= l - 1;

	int i;
	int j;

	for(i = 0; i < (1 << tam_conj); i++){
//	printf("oi");	
	for(j = 0; j < tam_conj; j++){
			if((i & (1 << j)) != 0){
				temp = temp ^ ar[j+ini];
			}
		}
		ret = ret ^ temp;
		temp = 0;
	}
	return ret;
}

int calculate2(int l, int r, int ar[]) {

	int i;
	
	int tam_conj = r - l + 1;
	int temp = 0;	


	for(i = r-1; i < l; i++){
		temp = temp ^ ar[i];
	}
	return temp;
}

int calculate3(int l, int r, int ar[]) {

	int ret;

	if(l == r)
		ret = ar[l-1];
	else
		ret = 0;	


	return ret;
}

