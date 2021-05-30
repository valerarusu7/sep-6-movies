import React from "react";
import { AiOutlineStar } from "react-icons/ai";


const PersonInfo = ({ person, styles }) => {

    return (
            <div className={styles.secondRow}>
                <section className={styles.facts}>
                    <h3>
                        <bdi>Personal Info</bdi>
                    </h3>
                    <section>
                        <p>
                            <strong>
                                <bdi>Known For: </bdi>
                            </strong>
                            {person.details.known_for_department}
                        </p>
                        <p>
                            <strong>
                                <bdi>Gender: </bdi>
                            </strong>
                            {parseInt(person.details.gender) === 1
                                ? "Female"
                                : "Male"}
                        </p>
                        <p class="full">
                            <strong>
                                <bdi>Birthday: </bdi>
                            </strong>
                            {person.details.birthday}
                        </p>average_movies_rating
                        <p class="full">
                            <strong>
                                <bdi>Place of Birth: </bdi>
                            </strong>
                            {person.details.place_of_birth}
                        </p>
                        <p class="full">
                            <strong>
                                <bdi>Average Rating: </bdi>
                            </strong>
                            {person.average_movies_rating} / 10  <AiOutlineStar size={13} style={{ marginBottom: 0 , margintop: 25 }} />
                        </p>
                    </section>
                </section>
            </div>

    );
};

export default PersonInfo;
