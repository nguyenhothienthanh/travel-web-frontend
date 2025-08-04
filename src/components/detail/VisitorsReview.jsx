import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import colors from "../../constants/Colors";

const sampleComments = [
    {
        name: "Anna",
        rating: 5,
        comment: "Breathtaking views and peaceful vibes!",
        image: "/assets/images/vinhhalong.png",
        avatar: "https://i.pravatar.cc/150?img=02",
        date: "2024-07-20",
    },
    {
        name: "Minh",
        rating: 4,
        comment: "Loved the kayaking. Would visit again.",
        image: "/assets/images/vinhhalong.png",
        avatar: "https://i.pravatar.cc/150?img=32",
        date: "2024-07-20",
    },
    {
        name: "John",
        rating: 5,
        comment: "Best travel experience I've had in Vietnam.",
        image: "/assets/images/vinhhalong.png",
        avatar: "https://i.pravatar.cc/150?img=35",
        date: "2024-07-20",
    },
    {
        name: "Linh",
        rating: 3,
        comment: "Beautiful but a bit crowded in peak season.",
        avatar: "https://i.pravatar.cc/150?img=42",
        date: "2024-07-20",
    },
    {
        name: "David",
        rating: 4,
        comment: "Great for photography!",
        avatar: "https://i.pravatar.cc/150?img=33",
        date: "2024-07-20",
    },
    {
        name: "Trang",
        rating: 5,
        comment: "The caves were absolutely stunning.",
        image: "/assets/images/vinhhalong.png",
        avatar: "https://i.pravatar.cc/150?img=72",
        date: "2024-07-20",
    },
];


const COMMENTS_PER_PAGE = 3;

const VisitorsReview = () => {
    const [comments, setComments] = useState(sampleComments);
    const [currentPage, setCurrentPage] = useState(1);
    const [form, setForm] = useState({
        name: "",
        rating: 5,
        comment: "",
        image: null,
    });


    const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
    const currentComments = comments.slice(
        (currentPage - 1) * COMMENTS_PER_PAGE,
        currentPage * COMMENTS_PER_PAGE
    );

    const overallRating =
        comments.reduce((sum, c) => sum + c.rating, 0) / comments.length;

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setForm((prev) => ({ ...prev, image: files[0] }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.comment) return;
        const newComment = {
            name: form.name,
            rating: Number(form.rating),
            comment: form.comment,
            image: form.image ? URL.createObjectURL(form.image) : null,
            avatar: "/assets/images/dongphongnha.png",
            date: new Date().toISOString().split("T")[0],
        };

        setComments([newComment, ...comments]);
        setForm({ name: "", rating: 5, comment: "", image: null });
        setCurrentPage(1);
    };


    return (
        <div style={{ marginTop: "60px", paddingBottom: "40px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: colors.black }}>
                Visitors Review
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "12px 0" }}>
                <div style={{ fontSize: "20px", color: colors.primary }}>
                    {overallRating.toFixed(1)} / 5
                </div>
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        color={i < Math.round(overallRating) ? "#FFD700" : "#ccc"}
                    />
                ))}
                <span style={{ fontSize: "14px", color: "#555" }}>
                    ({comments.length} reviews)
                </span>
            </div>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "20px",
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <input
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: colors.white, color: colors.grayDark }}
                />
                <select
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: colors.white, color: colors.grayDark }}
                >
                    {[5, 4, 3, 2, 1].map((r) => (
                        <option key={r} value={r}>
                            {r} Star{r > 1 && "s"}
                        </option>
                    ))}
                </select>
                <textarea
                    name="comment"
                    placeholder="Write your review..."
                    value={form.comment}
                    onChange={handleChange}
                    rows="4"
                    style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: colors.white, color: colors.grayDark }}
                />
                <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleChange}
                    style={{ padding: "10px 0", backgroundColor: colors.white, color: colors.grayDark }}
                />

                <button
                    type="submit"
                    style={{
                        backgroundColor: colors.primary,
                        color: "white",
                        padding: "10px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Submit Review
                </button>
            </form>

            <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {currentComments.map((c, idx) => (
                    <div
                        key={idx}
                        style={{
                            backgroundColor: colors.white,
                            padding: "16px",
                            borderRadius: "8px",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", gap: "8px" }}>
                            <img
                                src={c.avatar}
                                alt="avatar"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }}
                            />

                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <strong style={{ color: colors.black }}>{c.name}</strong>
                                        <span style={{ fontSize: "14px", color: "#777" }}>
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} size={12} color={i < c.rating ? "#FFD700" : "#ccc"} />
                                            ))}
                                        </span>
                                    </div>

                                    <strong style={{ color: colors.grayLight, fontSize: "12px" }}>{c.date}</strong>
                                </div>
                            </div>
                        </div>
                        <p style={{ marginTop: "8px", color: colors.grayDark, fontSize: "14px" }}>{c.comment}</p>

                        {c.image && (
                            <img
                                src={c.image}
                                alt="Review"
                                style={{
                                    marginTop: "10px",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "6px",
                                    objectFit: "cover",
                                }}
                            />
                        )}
                    </div>
                ))}

            </div>

            {totalPages > 1 && (
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            style={{
                                padding: "6px 12px",
                                backgroundColor: currentPage === i + 1 ? colors.primary : "#e0e0e0",
                                color: currentPage === i + 1 ? "white" : "#333",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VisitorsReview;
