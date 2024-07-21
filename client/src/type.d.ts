interface GeneralResponse<T> {
  status: string;
  message: string;
  data: T;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
  };
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  users: User[];
}

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}
