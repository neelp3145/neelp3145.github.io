// Name: Neel Panajkar
// Student ID: 801292531

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TaskManager manager = new TaskManager();
        boolean running = true;

        System.out.println("Welcome to the To-Do List Tracker!");

        while (running) {
            System.out.println("\nMenu:");
            System.out.println("1. Add Task");
            System.out.println("2. List Tasks");
            System.out.println("3. Mark Task as Complete");
            System.out.println("4. Delete Task");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");

            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    System.out.print("Enter task name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter priority (High/Medium/Low): ");
                    String priority = scanner.nextLine();
                    System.out.print("Enter due date (MM/DD/YYYY): ");
                    String dueDate = scanner.nextLine();
                    manager.addTask(name, priority, dueDate);
                    break;
                case 2:
                    manager.listTasks();
                    break;
                case 3:
                    manager.listTasks();
                    System.out.print("Enter task number to mark complete: ");
                    int completeIndex = Integer.parseInt(scanner.nextLine()) - 1;
                    manager.markTaskComplete(completeIndex);
                    break;
                case 4:
                    manager.listTasks();
                    System.out.print("Enter task number to delete: ");
                    int deleteIndex = Integer.parseInt(scanner.nextLine()) - 1;
                    manager.deleteTask(deleteIndex);
                    break;
                case 5:
                    running = false;
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }

        scanner.close();
    }
}
