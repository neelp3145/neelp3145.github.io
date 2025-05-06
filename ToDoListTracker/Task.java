// Name: Neel Panajkar
// Student ID: 801292531

public class Task {
    private String name;
    private String priority;
    private String dueDate;
    private boolean isCompleted;

    public Task(String name, String priority, String dueDate) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }

    public String getName() {
        return name;
    }

    public String getPriority() {
        return priority;
    }

    public String getDueDate() {
        return dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void markComplete() {
        this.isCompleted = true;
    }

    @Override
    public String toString() {
        return (isCompleted ? "[Completed] " : "[Pending] ") + name + " | Priority: " + priority + " | Due: " + dueDate;
    }
}
