// #include <iostream>
// #include <vector>
// #include<queue>
// using namespace std;

// void bfs(int sp, vector<vector<int>>& adj, vector<bool>& visit) {
//     queue<int> q;
//     visit[sp] = 1;
//     q.push(sp);
//     while(!q.empty()){
//         int temp = q.front();
//         q.pop();
//         cout << temp << " ";
//         for(int i=0;i<adj[temp].size();i++){
//             if(!visit[adj[temp][i]]){
//                 q.push(adj[temp][i]);
//                 visit[adj[temp][i]] =1;
//             }
//         }
//     }
// }

// int main() {
//     int edge, vertices;
//     cout << "Enter number of edges and vertices: ";
//     cin >> edge >> vertices;

//     vector<vector<int>> addList(vertices);

//     int u, v;
//     cout << "Enter edges (u v):" << endl;
//     for (int i = 0; i < edge; i++) {
//         cin >> u >> v;
//         addList[u].push_back(v);
//         addList[v].push_back(u); // undirected graph
//     }

//     vector<bool> visit(vertices, false);

//     cout << "bfs Traversal: ";
//     bfs(0, addList, visit);

//     return 0;
// }





// Online C++ compiler to run C++ program online
// #include <iostream>
// using namespace std;
// #include<vector>
// #include<queue>


// void bfs(int sp, vector<pair<int,int>> addList[], vector<bool>& visit) {
//     queue<int> q;
//     visit[sp] = 1;
//     q.push(sp);
//     while(!q.empty()){
//         int temp = q.front();
//         q.pop();
//         cout << temp << " ";
//         for(int i=0;i<addList[temp].size();i++){
//             int node = addList[temp][i].first;
//             if(!visit[node]){
//                 q.push(node);
//                 visit[node] = 1;
//             }

//         }
//     }
// }




// int main() {
//     int edge , vertices;
//     cout << "enter row and col :";
//     cin /*>> edge*/ >> vertices;
//     cout << endl;
    
//     vector<pair<int,int>> addList[vertices];
    
//     int u , v;
//     int num;  //weighted nums
//     for(int i=0;i<vertices;i++){
//         cin >> u >> v >> num;
//         cout << endl;
//         // addList[u].push_back(v);
//         // addList[v].push_back(u);
//         addList[u].push_back({v,num}); //weigthed 
//         addList[v].push_back({u,num});
//     }
//     cout << endl;
    
//       cout << "\nAdjacency List:" << endl;
//     for (int i = 0; i < vertices; i++) {
//         cout << i << " -> ";
//         for (auto &neighbor : addList[i]) {
//             cout << "{" << neighbor.first << " , " << neighbor.second << "} ";
//         }
//         cout << endl;
//     }

//     vector<bool> visit(vertices, false);

//     cout << "bfs Traversal: ";
//     bfs(0, addList, visit);
    
//     return 0;
// }





// from start to end to proper print in properformate : 0 -> 5 -> 4 ..... something like this 

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// Graph represented using an adjacency list
class Graph {
    int numVertices;
    vector<vector<int>> adjList;

public:
    Graph(int vertices) {
        numVertices = vertices;
        adjList.resize(vertices);
    }

    // Add an edge between two nodes (undirected graph)
    void addEdge(int u, int v) {
        adjList[u].push_back(v);
        adjList[v].push_back(u);
    }

    // Breadth First Search starting from 'start'
    void bfs(int start, int goal) {
        vector<pair<bool, string>> visited(numVertices, {false,""});
        queue<int> q;
        
        visited[start] = {true, to_string(start)};
        q.push(start);

        cout << "BFS Traversal Order: ";
        while (!q.empty()) {
            int current = q.front();
            q.pop();
            
            if(current == goal){
                cout << visited[current].second;
                return;
            }

            // Visit all unvisited neighbours
            for (int neighbour : adjList[current]) {
                if (!visited[neighbour].first) {
                    q.push(neighbour);
                    visited[neighbour] = {
                        true, 
                        visited[current].second + "->" + to_string(neighbour)
                    };
                }
            }
        }
        cout << endl;
    }
};

int main() {
    Graph g(6); // 6 nodes: 0 to 5
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 5);

    g.bfs(1,3); // Start BFS from node 0
    return 0;
}



