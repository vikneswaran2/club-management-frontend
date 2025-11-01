// src/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://your-placeholder-url";

async function apiRequest(path, method = "GET", body = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_BASE_URL}${path}`, options);
  if (!response.ok) throw new Error(`API error: ${response.statusText}`);
  return response.json();
}

// Members APIs
export function getMembers() {
  return apiRequest("/members");
}
export function addMember(member) {
  return apiRequest("/members", "POST", member);
}
export function deleteMember(id) {
  return apiRequest(`/members/${id}`, "DELETE");
}

// Events APIs
export function getEvents() {
  return apiRequest("/events");
}
export function addEvent(event) {
  return apiRequest("/events", "POST", event);
}
export function deleteEvent(id) {
  return apiRequest(`/events/${id}`, "DELETE");
}

// Tasks APIs
export function getTasks() {
  return apiRequest("/tasks");
}
export function addTask(task) {
  return apiRequest("/tasks", "POST", task);
}
export function deleteTask(id) {
  return apiRequest(`/tasks/${id}`, "DELETE");
}

// Announcements APIs
export function getAnnouncements() {
  return apiRequest("/announcements");
}

// Gallery signed URL API (for image upload)
export function getUploadUrl(filename) {
  return apiRequest(`/gallery/signed-url?filename=${filename}`);
}
