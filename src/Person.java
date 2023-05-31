public class Person
{
    int height =154;
    int weight = 65;

    double CalculateBMI()
    {
        return weight/(height*height);
    }

    void walk()
    {
        System.out.println("Person is walking");
    }
}
