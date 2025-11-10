
        



from asyncio import Task


class bank:

    def __init__(self, name,accno,bal,address ):
        self.name=name #public
        self._accno=accno #protected
        self.__bal=bal #private
        self.address=address

    def getbal(self):
        return self.__bal
    
    def setbal(self,val):
        self.__bal=val
        


class axisbank(bank):

    def __init__(self, name, accno, bal, address, type):
        super().__init__(name, accno, bal, address)
        self.type=type

    def showBalance(self):
        return f'dear customer your currect balance is {self.getbal()}'
    def deposit(self,amount):
        mybal=self.getbal()
        mybal+=amount
        self.setbal(mybal)



cust1=axisbank('abc',78469,1000,'rspuram','savings')

    
print(cust1.name)
print(cust1._accno)
print(cust1.getbal())

print(cust1.showBalance())


cust1.deposit(11)


print(cust1.showBalance())




# Task 1: Student & College Example

# Goal:
# Use inheritance to show how encapsulated data can be safely accessed in a child class.

# Steps:

# Create base class â†’ College

# Private variable: __college_name

# Method: set_college(name) and get_college()

# Create child class â†’ Student(College)

# Private variable: __student_name

# Method: set_student(name) and get_student()

# From child class, lege nadisplay both student and colme using getter methods.

# Try accessing private variables directly (should fail).

1.

class college:

    def __init__(self,college_name,):
        self.__college_name=college_name

    
    def set_college(self,name):
        self.__college_name=name

    def get_college(self):
        return self.__college_name
    

class student(college):
    def __init__(self, college_name,student_name):
        super().__init__(college_name)
        self.__student_name=student_name

    
    
    def set_student(self, name):
        self.__student_name=name

    def get_student(self):
        return self.__student_name
    def show_details(self):
        print("college_name",self.get_college())
        print("name",self.get_student())
    
    

std1=student("Hindustan","Hussain")
std1.get_college()
std1.get_student()
std1.show_details()


# Hotel & Room Example

# Goal:
# Show that room details are encapsulated, and inherited by hotel system.

# Steps:

# Base class â†’ Hotel

# Private variable: __hotel_name

# Methods: set_hotel_name(), get_hotel_name()

# Child class â†’ Room(Hotel)

# Private variable: __room_price

# Methods: set_price(), get_price()

# Create an object of Room class and display both hotel name and room price.

2.
    

class hotel:

    def __init__(self,hotel_name):
        self.__hotel_name=hotel_name

    def get_hotel_name(self)
      return self.__hotel_name

    def set_hotel_name(self)
     self.__hotel_name
     


    
class room(hotel):
    def __init__(self, hotel_name,room_price):
        super().__init__(hotel_name)
        self.__room_price=room_price
        
    def set_price(self,val)
      self.__room_price=val

    def get_price(self)
     return self.__room_price

    def show_details(self)
    print('hotel_name',self.get_hotel_name())
    print('price',self.get_price())


std2=room('Hussain',2000)
std2.get_hotel_name()
std2.get_price()
std2.show_details()



# Task 3: Transport & BusTicket Example

# Goal:
# Encapsulate fare details, inherit transport name.

# Steps:

# Base class â†’ Transport

# Private variable: __transport_name

# Methods: set_name(), get_name()

# Child class â†’ BusTicket(Transport)

# Private variable: __fare

# Methods: set_fare(), get_fare()


3.


class transport:

    def __init__(self,transport_name)
    self.__transport_name=transport_name

    def set_name(self, val)
     self.__transport_name=val

    def get_name(self)
     return self.__transport_name

class BusTicket(transport):
     def __init__(self,transport,__fare)
        super().__init__(transport)
        self.__fare=__fare


    def set_fare(self, f)
     self.__fare=f

    def get_fare(self)
     return self.__fare

    def show_details(self)
      print('transport_name:',self.get_name())
      print('fare',self.get_fare())


std3=room('Hussain',20)
std3.get_name()
std3.get_fare()
std3.show_details()