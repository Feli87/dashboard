"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../ui/login/registerpage.module.css';
import { MdError } from 'react-icons/md';

const Register = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm({
        defaultValues: {
            email: "default@example.com",
            password: "password",
            confirmPassword: "password"
        }
    });

    const password = watch("password");

    const onSubmit = (data) => {
        console.log(data); // Aquí puedes manejar la lógica de registro
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.title}>Sing up</h2>
                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input
                        id='email'
                        name='email'
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && (
                        <div className={styles.errorContainer}>
                            <MdError className={styles.errorIcon} size={20} />
                            <p className={styles.error}>{errors.email.message}</p>
                        </div>
                    )}
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input
                        id='password'
                        name='password'
                        type="password"
                        {...register('password', {
                            required: "Password is required",
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                message: "Password must contain at least one letter and one number"
                            }
                        })}
                    />
                    {errors.password && (
                        <div className={styles.errorContainer}>
                            <MdError className={styles.errorIcon} size={20} />
                            <p className={styles.error}>{errors.password.message}</p>
                        </div>
                    )}
                </div>
                <div className={styles.inputGroup}>
                    <label>Confirm Password</label>
                    <input
                        id='confirmPassword'
                        name='confirmPassword'
                        type="password"
                        {...register('confirmPassword', {
                            required: "Confirm password is required",
                            validate: value => value === password || "The passwords do not match"
                        })}
                    />
                    {errors.confirmPassword && (
                        <div className={styles.errorContainer}>
                            <MdError className={styles.errorIcon} size={20} />
                            <p className={styles.error}>{errors.confirmPassword.message}</p>
                        </div>
                    )}
                </div>
                <button className={styles.loginBtn} type="submit" disabled={isSubmitting}>Sing up</button>
            </form>
        </div>
    );
};

export default Register;

