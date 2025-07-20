<!-- README.md -->

<h1 align="center">📝 TaskMate - React To-Do App</h1>

<p align="center">
  <strong>Minimal, themeable, and persistent to-do list built with React.</strong>
</p>

<hr>

<h2>⚙️ How It Works</h2>

<h3>➕ Add a Task</h3>
<ul>
  <li>Type your task and click <code>Add</code>.</li>
  <li>Each task gets a unique ID and timestamp.</li>
  <li>Input field clears automatically after adding.</li>
</ul>

<h3>✏️ Edit a Task</h3>
<ul>
  <li>Click the pencil icon next to any task.</li>
  <li>The task loads into the input field for editing.</li>
  <li>The "Add" button changes to "Update".</li>
</ul>

<h3>🗑️ Delete a Task</h3>
<ul>
  <li>Click the trash icon to remove the task from the list.</li>
</ul>

<h3>🧹 Clear All Tasks</h3>
<ul>
  <li>Click the <code>Clear All</code> button to remove all tasks at once.</li>
</ul>

<h3>💾 Persistent Storage</h3>
<ul>
  <li>Tasks are saved in <code>localStorage</code> under the key <code>taskList</code>.</li>
  <li>Tasks persist across page reloads or browser restarts.</li>
</ul>

<h3>🎨 Theme Selector</h3>
<ul>
  <li>Choose from 6 themes: <code>light</code>, <code>dark</code>, <code>medium</code>, <code>gOne</code>, <code>gTwo</code>, <code>gThree</code>.</li>
  <li>The selected theme is applied to the <code>&lt;html&gt;</code> tag and stored in <code>localStorage</code> under the key <code>theme</code>.</li>
</ul>

<hr>

<h2>🧠 State Management</h2>

<table>
  <thead>
    <tr>
      <th>State Variable</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>taskList</code></td>
      <td>Holds the array of all task objects</td>
    </tr>
    <tr>
      <td><code>task</code></td>
      <td>Stores the current task being edited or added</td>
    </tr>
    <tr>
      <td><code>theme</code></td>
      <td>Controls the applied theme</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📝 Task Object Format</h2>

<pre>
{
  "id": 1690654234567,
  "name": "Finish assignment",
  "time": "7/29/2025 11:23:10 AM"
}
</pre>

<hr>

<h2>🎯 Highlights</h2>

<ul>
  <li>✅ Add, update, delete, and clear tasks</li>
  <li>🌈 6 custom themes</li>
  <li>💾 LocalStorage integration</li>
  <li>⚛️ Built with React Hooks (useState, useEffect)</li>
  <li>📱 Mobile-friendly responsive design</li>
</ul>

<p align="center"><em>Made with ❤️ using React</em></p>
