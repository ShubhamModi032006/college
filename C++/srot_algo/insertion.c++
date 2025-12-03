




#include <iostream>
#include <vector>
using namespace std;

    
int main() {
    vector<int> arr = {1,2,4,5,3,7};
    for(int i=1;i<arr.size();i++){
      int key = arr[i];
      int j = i-1;
      while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = key;
    }
    
    
    for(int num : arr){
      cout << num << " ";
    }
    return 0;
}
