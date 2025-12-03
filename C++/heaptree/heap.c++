// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
#include <vector>

int main()
{
    int arr[] = {10, 2, 4, 3, 5, 8, 6};
    int size = sizeof(arr) / sizeof(arr[0]);

    vector<int> ans;
    ans.push_back(0);

    for (int j = 0; j < size; j++)
    {
        ans.push_back(arr[j]);
        int i = ans.size() - 1;

        // Bubble up for max-heap property
        while (i > 1 && ans[i] > ans[i / 2])
        {
            swap(ans[i], ans[i / 2]);
            i = i / 2;
        }
    }

    for (int i = 1; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }

    return 0;
}

// #include <iostream>
// #include <vector>
// using namespace std;

// // Function to insert element into max-heap
// void insertIntoHeap(vector<int>& heap, int value) {
//     heap.push_back(value);
//     int i = heap.size() - 1;

//     // Bubble up to maintain max-heap property
//     while (i > 1 && heap[i] > heap[i / 2]) {
//         swap(heap[i], heap[i / 2]);
//         i = i / 2;
//     }
// }

// int main() {
//     int arr[] = {10, 2, 4, 3, 5, 8, 6};
//     int size = sizeof(arr) / sizeof(arr[0]);

//     vector<int> heap;
//     heap.push_back(0); // Dummy element at index 0 for 1-based indexing

//     for (int j = 0; j < size; j++) {
//         insertIntoHeap(heap, arr[j]);
//     }

//     // Output the heap (excluding dummy element)
//     for (int i = 1; i < heap.size(); i++) {
//         cout << heap[i] << " ";
//     }

//     return 0;
// }
