import { useState } from "react";
import colors from "../constants/Colors";
import { Link } from "react-router-dom";
const ForgotPasswordPage = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSendOTP = () => {
        console.log("Sending OTP to:", email);
        setStep(2);
    };

    const handleVerifyOTP = () => {
        console.log("Verifying OTP:", otp);
        setStep(3);
    };

    const handleResetPassword = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        //Call API to reset password
        console.log("Resetting password for:", email);
        setStep(4);
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <img
                src="/assets/images/vinhhalong.png"
                alt="Forgot Password"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.5,
                    zIndex: 1
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        backdropFilter: "blur(1px)",
                        borderRadius: 12,
                        padding: "32px 24px",
                        width: "90%",
                        maxWidth: 400,
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                        position: "relative",
                    }}
                >
                    {step > 1 && step <= 4 && (
                        <button
                            onClick={() => setStep(step - 1)}
                            style={{
                                position: "absolute",
                                top: 16,
                                left: 16,
                                background: "none",
                                border: "none",
                                fontSize: 18,
                                fontWeight: "bold",
                                cursor: "pointer",
                                color: colors.black,
                            }}
                        >
                            ← Back
                        </button>
                    )}

                    <div style={{ marginTop: step > 1 ? 30 : 0 }}>
                        {step === 1 && (
                            <>
                                <h2 style={{ marginBottom: 10 }}>Forgot Password</h2>
                                <p style={{ color: colors.grayLight, fontSize: 14, marginBottom: 20 }}>
                                    Please enter your email to receive OTP
                                </p>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        marginBottom: 16,
                                        borderRadius: 4,
                                        backgroundColor: "transparent",
                                        border: "none",
                                        borderBottom: `1px solid ${colors.white}`,
                                        color: colors.white,
                                        fontSize: 14,

    }}
/>
                                <button
                                    onClick={handleSendOTP}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        backgroundColor: colors.primary,
                                        color: colors.white,
                                        border: "none",
                                        borderRadius: 4,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Send OTP
                                </button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h2 style={{ marginBottom: 10 }}>Enter OTP</h2>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        marginBottom: 16,
                                        borderRadius: 4,
                                        border: "1px solid #ccc",
                                    }}
                                />
                                <button
                                    onClick={handleVerifyOTP}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        backgroundColor: colors.primary,
                                        color: colors.white,
                                        border: "none",
                                        borderRadius: 4,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Verify OTP
                                </button>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h2 style={{ marginBottom: 10 }}>Reset Password</h2>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        marginBottom: 12,
                                        borderRadius: 4,
                                        border: "1px solid #ccc",
                                    }}
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        marginBottom: 16,
                                        borderRadius: 4,
                                        border: "1px solid #ccc",
                                    }}
                                />
                                <button
                                    onClick={handleResetPassword}
                                    style={{
                                        width: "100%",
                                        padding: 10,
                                        backgroundColor: colors.primary,
                                        color: colors.white,
                                        border: "none",
                                        borderRadius: 4,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Reset Password
                                </button>
                            </>
                        )}

                        {step === 4 && (
                            <>
                                <h2 style={{ color: "green", marginBottom: 10 }}>Success!</h2>
                                <p>Password has been reset. You can now log in with your new password.</p>
                            </>
                        )}
                    </div>

                    <div style={{ marginTop: 20, textAlign: "center" }}>
                        <Link to={"/login"} style={{ color: colors.black }}>
                            Back to Login
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );

}

export default ForgotPasswordPage