// Union Type Example
function printValue(value: string | number): void {
    console.log("Value:", value);
}

// Intersection Type Example
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
};

type StaffMember = Person & Employee;

const staff: StaffMember = {
    name: "John Doe",
    age: 30,
    employeeId: 12345
};

console.log("Staff Member:", staff);

// Function that handles both string and number inputs
function processInput(input: string | number): void {
    if (typeof input === 'string') {
        console.log("Concatenated value:", input + " is a string");
    } else {
        console.log("Added value:", input + 10);
    }
}

processInput("Hello");
processInput(5);

// Discriminated Union Example
type Shape = 
    | { type: 'circle'; radius: number }
    | { type: 'rectangle'; width: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.type) {
        case 'circle':
            const circleArea = Math.PI * shape.radius ** 2;
            console.log("Area of Circle:", circleArea);
            return circleArea;
        case 'rectangle':
            const rectangleArea = shape.width * shape.height;
            console.log("Area of Rectangle:", rectangleArea);
            return rectangleArea;
    }
}

calculateArea({ type: 'circle', radius: 5 });
calculateArea({ type: 'rectangle', width: 10, height: 5 });

// Mapped Type Example
type PersonType = {
    name: string;
    age: number;
};

type OptionalPerson = {
    [K in keyof PersonType]?: PersonType[K];
};

const optionalPerson: OptionalPerson = {
    name: "Jane Doe"
};

console.log("Optional Person:", optionalPerson);

// Conditional Type Example
type IsString<T> = T extends string ? 'Yes' : 'No';

const testString: IsString<string> = 'Yes'; // 'Yes'
const testNumber: IsString<number> = 'No'; // 'No'

console.log("Is string test (string):", testString);
console.log("Is string test (number):", testNumber);

// Template Literal Type Example
type EventHandler<T extends string> = `on${Capitalize<T>}`;

const clickEventHandler: EventHandler<'click'> = 'onClick'; // 'onClick'
console.log("Event Handler Type for 'click':", clickEventHandler);

// Utility Types Examples
type PartialPerson = Partial<PersonType>;
type RequiredPerson = Required<PersonType>;
type PickedPerson = Pick<PersonType, 'name'>;
type OmittedPerson = Omit<PersonType, 'age'>;

const partialPerson: PartialPerson = {
    name: "Alice"
};

const requiredPerson: RequiredPerson = {
    name: "Bob",
    age: 25
};

const pickedPerson: PickedPerson = {
    name: "Charlie"
};

const omittedPerson: OmittedPerson = {
    age: 40
};

console.log("Partial Person:", partialPerson);
console.log("Required Person:", requiredPerson);
console.log("Picked Person:", pickedPerson);
console.log("Omitted Person:", omittedPerson);