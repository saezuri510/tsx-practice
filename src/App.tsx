type foodItem = {
    name: string;
    isLike: boolean;
};

const food: foodItem[] = [
    { name: "Pizza", isLike: true },
    { name: "Hamburger", isLike: false },
    { name: "Pasta", isLike: true },
    { name: "Salad", isLike: false },
    { name: "Sushi", isLike: true },
];

function App() {
    return (
        <div>
            {food.map((value) => {
                return (
                    <div>
                        {value.isLike === true ? (
                            <p>I like {value.name}</p>
                        ) : (
                            <p>I don't like {value.name}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default App;
