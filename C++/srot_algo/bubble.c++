#include <iostream>
#include <vector>
using namespace std;

    
int main() {
    vector<int> arr = {1,2,4,5,3,7};
    int n = arr.size();
    for(int i = 0;i<n-1;i++){
      for(int j=0;j<n-i-1;j++){
        if(arr[j] > arr[j+1]){
          swap(arr[j],arr[j+1]);
        }
      }
    }
    
    for(int num : arr){
      cout << num << " "; 
    }
    return 0;
}
 