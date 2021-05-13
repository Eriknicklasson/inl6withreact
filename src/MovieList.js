import React, { useState, useRef } from 'react'
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([



    ]);
    const inputRef = useRef();
    const gradeRef = useRef();

    function addItem(event) {
        if (inputRef.current.value == "") {
            alert("Du saknas en titel")
            return false
        } else if (gradeRef.current.value == "0") {
            alert("Du saknas ett betyg")
            return false
        }

        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

        setMovies([...movies, {
            id: newId,
            title: inputRef.current.value,
            grade: gradeRef.current.value
        }]);
        gradeRef.current.value = 0
        inputRef.current.value = "";
    }

    function sortTitleAlgo(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }

    function sortTitle() {
        movies.sort(sortTitleAlgo);

        setMovies([...movies]);
    }

    function sortGradeAlgo(a, b) {
        if (a.grade > b.grade) {
            return -1;
        }
        if (a.grade < b.grade) {
            return 1;
        }
        return 0;

    }

    function sortGrade() {
        movies.sort(sortGradeAlgo);

        setMovies([...movies]);

    }




    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }
    return (
        <div>
            <input className="form-control" placeholder="lägg till film titel här!" ref={inputRef} />
            <label for="movies">Sätt ett betyg på filmen:</label>
            <select class="form-control" ref={gradeRef}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={addItem} >
                Lägg till film
            </button>
            <button onClick={sortTitle} >
                Sortera efter titel:
            </button>
            <button onClick={sortGrade} >
                sortera efter betyg:
            </button>


            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />)}

            </ul>
        </div >
    )
}